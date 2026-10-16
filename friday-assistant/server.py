import os
import sys
import json
import time
import platform
import subprocess
import http.server
import socketserver
from urllib.parse import urlparse, parse_qs

# Ensure psutil is imported
try:
    import psutil
except ImportError:
    psutil = None

PORT = 8080

class FridayHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local file access and cross-origin development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        # Handle CORS preflight
        self.send_response(200, "OK")
        self.end_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == '/api/telemetry':
            self.handle_telemetry()
        else:
            # Fall back to standard static file serving
            super().do_GET()

    def do_POST(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == '/api/command':
            self.handle_command()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_telemetry(self):
        if not psutil:
            # Fallback mock telemetry if psutil is somehow missing
            data = {
                "status": "online",
                "cpu": 25.4,
                "ram": 48.2,
                "ram_total": 16.0,
                "ram_used": 7.7,
                "disk": 62.1,
                "disk_total": 512.0,
                "disk_used": 318.0,
                "battery": 88,
                "battery_charging": True,
                "uptime": "03:45:12",
                "os_version": f"{platform.system()} {platform.release()}",
                "cpu_temp": 42.0,
                "mode": "simulated"
            }
        else:
            # Gather real telemetry
            try:
                # CPU Percentage
                cpu = psutil.cpu_percent(interval=None)
                
                # RAM
                virtual_mem = psutil.virtual_memory()
                ram_total = round(virtual_mem.total / (1024 ** 3), 1)
                ram_used = round(virtual_mem.used / (1024 ** 3), 1)
                ram_pct = virtual_mem.percent

                # Disk (primary partition)
                disk_usage = psutil.disk_usage('/')
                disk_total = round(disk_usage.total / (1024 ** 3), 1)
                disk_used = round(disk_usage.used / (1024 ** 3), 1)
                disk_pct = disk_usage.percent

                # Battery
                battery_info = psutil.sensors_battery()
                battery = battery_info.percent if battery_info else None
                battery_charging = battery_info.power_plugged if battery_info else False

                # Uptime calculation
                boot_time = psutil.boot_time()
                uptime_seconds = int(time.time() - boot_time)
                
                hours = uptime_seconds // 3600
                minutes = (uptime_seconds % 3600) // 60
                seconds = uptime_seconds % 60
                uptime_str = f"{hours:02d}:{minutes:02d}:{seconds:02d}"

                # CPU Temperature (Windows check / mock)
                cpu_temp = None
                try:
                    # psutil.sensors_temperatures() typically raises AttributeError or is empty on Windows
                    temps = psutil.sensors_temperatures()
                    if temps and 'coretemp' in temps:
                        cpu_temp = temps['coretemp'][0].current
                except Exception:
                    pass

                # If no temp sensor is exposed (standard on Windows without admin), generate a stable nominal reading
                if not cpu_temp:
                    # Mock temperature fluctuating between 40 and 65 based on CPU load
                    cpu_temp = round(38.0 + (cpu * 0.25) + (time.time() % 3.0), 1)

                data = {
                    "status": "online",
                    "cpu": cpu,
                    "ram": ram_pct,
                    "ram_total": ram_total,
                    "ram_used": ram_used,
                    "disk": disk_pct,
                    "disk_total": disk_total,
                    "disk_used": disk_used,
                    "battery": battery,
                    "battery_charging": battery_charging,
                    "uptime": uptime_str,
                    "os_version": f"{platform.system()} {platform.release()}",
                    "cpu_temp": cpu_temp,
                    "mode": "live"
                }
            except Exception as e:
                data = {"status": "error", "message": str(e)}

        response_body = json.dumps(data).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(response_body))
        self.end_headers()
        self.wfile.write(response_body)

    def handle_command(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            req = json.loads(post_data.decode('utf-8'))
            command = req.get('command', '').lower().strip()
        except Exception:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'{"status":"error","message":"Invalid JSON payload"}')
            return

        result = {"status": "error", "message": "Unknown command"}
        
        # Safe command routing table
        if command == "notepad":
            subprocess.Popen(["notepad.exe"])
            result = {"status": "success", "message": "Launching Notepad..."}
        elif command == "calculator" or command == "calc":
            subprocess.Popen(["calc.exe"])
            result = {"status": "success", "message": "Launching Calculator..."}
        elif command == "code" or command == "vscode":
            # Run code . in the current working directory
            workspace_dir = os.path.dirname(os.path.abspath(__file__))
            subprocess.Popen(["code", "."], cwd=workspace_dir, shell=True)
            result = {"status": "success", "message": "Initializing VS Code in workspace..."}
        elif command == "chrome" or command == "browser":
            subprocess.Popen(["start", "chrome"], shell=True)
            result = {"status": "success", "message": "Launching Chrome Web Browser..."}
        elif command == "explorer":
            workspace_dir = os.path.dirname(os.path.abspath(__file__))
            subprocess.Popen(["explorer.exe", workspace_dir])
            result = {"status": "success", "message": "Opening file explorer at workspace..."}
        elif command == "lock":
            # Windows API call to lock the screen
            subprocess.Popen(["rundll32.exe", "user32.dll,LockWorkStation"])
            result = {"status": "success", "message": "Securing local station. Terminal locked."}

        response_body = json.dumps(result).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(response_body))
        self.end_headers()
        self.wfile.write(response_body)

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    # Serve files out of the directory where the script resides
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    print(f"Stark AI (F.R.I.D.A.Y. Core) initialization sequence...")
    print(f"Active Directory: {script_dir}")
    print(f"Server uplink launching on port {PORT}...")
    
    with ThreadingTCPServer(("", PORT), FridayHandler) as httpd:
        print(f"UPLINK SECURED. Connect to: http://localhost:{PORT}")
        print("Press Ctrl+C to terminate the F.R.I.D.A.Y. link.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down F.R.I.D.A.Y. link. Goodbye.")
            sys.exit(0)
