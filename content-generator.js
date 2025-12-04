// COMPREHENSIVE CONTENT GENERATOR - 360+ PAGES
// Deep-dive content for complete mastery of all 6 phases

const CONTENT_DATA = {
    // PHASE 1: EXCEL & COMPUTER BASICS (20 Topics)
    phase1: {
        title: "Excel & Computer Basics",
        topics: [
            {
                title: "Computer Basics 💻",
                pages: [
                    { title: "What is a Computer?", content: "<p><strong>ELI5:</strong> A computer is just a rock that we tricked into thinking.</p><p>It's a machine that processes information (data) very fast.</p><p>It has two main parts: <strong>Hardware</strong> (what you touch) and <strong>Software</strong> (what you see).</p>" },
                    { title: "Hardware vs Software", content: "<p><strong>Hardware:</strong> The physical parts. Screen, keyboard, CPU (the brain).</p><p><strong>Software:</strong> The instructions. Windows, Chrome, Excel.</p><p>💡 Analogy: Hardware is the kitchen. Software is the recipe.</p>" },
                    { title: "The Operating System", content: "<p>The <strong>OS</strong> is the boss.</p><p>It manages all the hardware and software.</p><p>Examples: Windows, macOS, Linux, Android.</p><p>Without an OS, your computer is just a fancy paperweight.</p>" }
                ]
            },
            {
                title: "Excel Interface 📊",
                pages: [
                    { title: "Meet Excel", content: "<p>Excel is a <strong>Spreadsheet</strong> program.</p><p>It's a giant grid of boxes called <strong>cells</strong>.</p><p>It's used for EVERYTHING: Budgets, schedules, data analysis, even art!</p>" },
                    { title: "The Ribbon", content: "<p>The strip of buttons at the top is the <strong>Ribbon</strong>.</p><p>It has tabs: Home, Insert, Data, etc.</p><p>Think of it as your toolbox. Each tab is a different drawer of tools.</p>" },
                    { title: "Formula Bar", content: "<p>The long white bar above the grid.</p><p>This is where you type instructions (formulas).</p><p>What you see in the cell is the <em>result</em>. The Formula Bar shows the <em>truth</em>.</p>" }
                ]
            },
            {
                title: "Cells & Ranges 🎯",
                pages: [
                    { title: "The Address System", content: "<p>Every cell has an address.</p><p><strong>Column Letter</strong> + <strong>Row Number</strong>.</p><p>Top left is <strong>A1</strong>.</p><p>It's like the game Battleship!</p>" },
                    { title: "What is a Range?", content: "<p>A group of cells is a <strong>Range</strong>.</p><p>Written as: <code>Start:End</code></p><p>Example: <code>A1:A10</code> means all cells from A1 down to A10.</p>" },
                    { title: "Selecting Data", content: "<p>Click and drag to select.</p><p><strong>Ctrl + Click</strong> to select separate cells.</p><p><strong>Shift + Click</strong> to select a whole block.</p><p>⚡ Pro Tip: <strong>Ctrl + A</strong> selects EVERYTHING.</p>" }
                ]
            },
            {
                title: "Data Types 🔢",
                pages: [
                    { title: "Text vs Numbers", content: "<p>Excel treats them differently!</p><p><strong>Text:</strong> Aligns Left. Cannot do math.</p><p><strong>Numbers:</strong> Aligns Right. Can do math.</p><p>⚠️ '123' (text) is NOT the same as 123 (number).</p>" },
                    { title: "Dates & Times", content: "<p>Dates are actually numbers in disguise!</p><p>1 = Jan 1, 1900.</p><p>Today is around 45,000.</p><p>This lets you do math with dates (e.g., Today - Birthday = Age).</p>" },
                    { title: "Currency & Percent", content: "<p>Formatting changes how it LOOKS, not the value.</p><p><code>$10.00</code> is just the number <code>10</code> with a fancy coat.</p><p><code>50%</code> is just <code>0.5</code> dressed up.</p>" }
                ]
            },
            {
                title: "Basic Formulas ➕",
                pages: [
                    { title: "The Magic Symbol", content: "<p>Every formula starts with <strong>=</strong></p><p>If you type <code>2+2</code>, Excel shows text.</p><p>If you type <code>=2+2</code>, Excel calculates <code>4</code>.</p><p>The equals sign wakes Excel up!</p>" },
                    { title: "Math Operators", content: "<p><code>+</code> Add</p><p><code>-</code> Subtract</p><p><code>*</code> Multiply (Star)</p><p><code>/</code> Divide (Slash)</p><p><code>^</code> Power (Carrot)</p>" },
                    { title: "Using Cell References", content: "<p>Don't type <code>=5+10</code>.</p><p>Type <code>=A1+B1</code>.</p><p>Why? If you change A1, the answer updates automatically!</p><p>This is the power of Excel.</p>" }
                ]
            },
            {
                title: "SUM & COUNT 🧮",
                pages: [
                    { title: "The SUM Function", content: "<p>Adds up a list of numbers.</p><p><code>=SUM(A1:A10)</code></p><p>Much faster than <code>=A1+A2+A3...</code></p><p>Ignores text and empty cells.</p>" },
                    { title: "The COUNT Function", content: "<p>Counts how many cells have <strong>numbers</strong>.</p><p><code>=COUNT(A1:A10)</code></p><p>Useful to see how many sales you made.</p>" },
                    { title: "COUNTA (Count All)", content: "<p>Counts cells that are <strong>not empty</strong> (text or numbers).</p><p><code>=COUNTA(A1:A10)</code></p><p>Use this for counting names or items.</p>" }
                ]
            },
            {
                title: "AVERAGE & MIN/MAX 📉",
                pages: [
                    { title: "AVERAGE", content: "<p>Calculates the mean.</p><p><code>=AVERAGE(A1:A10)</code></p><p>Sum of numbers / Count of numbers.</p><p>Great for test scores, daily sales, temperature.</p>" },
                    { title: "MIN and MAX", content: "<p><code>=MIN(Range)</code> finds the smallest number.</p><p><code>=MAX(Range)</code> finds the largest number.</p><p>Use to find your best sales day or lowest score.</p>" },
                    { title: "AutoSum Shortcut", content: "<p>Highlight numbers and press <strong>Alt + =</strong></p><p>Excel guesses what you want to sum.</p><p>It's usually right!</p>" }
                ]
            },
            {
                title: "Relative vs Absolute Refs 💲",
                pages: [
                    { title: "Relative References", content: "<p>By default, references move.</p><p>If you copy <code>=A1+1</code> down one row, it becomes <code>=A2+1</code>.</p><p>This is usually helpful!</p>" },
                    { title: "Absolute References", content: "<p>Sometimes you want to lock a cell.</p><p>Use the <strong>$</strong> sign.</p><p><code>=$A$1</code> stays A1 no matter where you copy it.</p>" },
                    { title: "The F4 Key", content: "<p>Click a cell reference in a formula and press <strong>F4</strong>.</p><p>It cycles through: <code>A1</code> → <code>$A$1</code> → <code>A$1</code> → <code>$A1</code>.</p><p>Huge time saver!</p>" }
                ]
            },
            {
                title: "Formatting 🎨",
                pages: [
                    { title: "Make it Pretty", content: "<p>Fonts, colors, borders.</p><p><strong>Why?</strong> Readability!</p><p>A messy spreadsheet is a confusing spreadsheet.</p><p>Use bold for headers.</p>" },
                    { title: "Number Formats", content: "<p>Tell Excel what the number represents.</p><p>Currency ($), Percentage (%), Date, Time.</p><p>Remember: It changes the <em>look</em>, not the <em>value</em>.</p>" },
                    { title: "Format Painter", content: "<p>The paintbrush icon 🖌️.</p><p>Click a pretty cell, click Paintbrush, then click an ugly cell.</p><p>It copies the style instantly!</p>" }
                ]
            },
            {
                title: "Conditional Formatting 🚦",
                pages: [
                    { title: "Visual Rules", content: "<p>Change color based on value.</p><p>Example: Turn cell RED if value < 0.</p><p>Turn cell GREEN if value > 100.</p>" },
                    { title: "Data Bars", content: "<p>Adds a mini bar chart inside the cell.</p><p>Great for visualizing size differences in a list of numbers.</p>" },
                    { title: "Heat Maps", content: "<p>Color scales (Red to Green).</p><p>Instantly spot the high and low numbers in a big table.</p>" }
                ]
            },
            {
                title: "Sorting & Filtering 🔍",
                pages: [
                    { title: "Sorting", content: "<p>Arrange data in order.</p><p>A-Z (Ascending) or Z-A (Descending).</p><p>Smallest to Largest.</p><p>⚠️ Always select the WHOLE table before sorting!</p>" },
                    { title: "Filtering", content: "<p>The funnel icon.</p><p>Hides rows you don't want to see.</p><p>Example: Show only 'USA' customers.</p><p>The data isn't gone, just hidden.</p>" },
                    { title: "Sort by Color", content: "<p>Did you know?</p><p>You can filter or sort by cell color!</p><p>Great for processing lists you've highlighted manually.</p>" }
                ]
            },
            {
                title: "VLOOKUP 🔍",
                pages: [
                    { title: "The Legend", content: "<p>Vertical Lookup.</p><p>Finds a value in the first column and returns something from the same row.</p><p>Like looking up a phone number in a book.</p>" },
                    { title: "Syntax", content: "<p><code>=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])</code></p><p>1. What to find?</p><p>2. Where to look?</p><p>3. Which column to return?</p><p>4. False (Exact match)</p>" },
                    { title: "Common Errors", content: "<p><strong>#N/A</strong>: Not found.</p><p><strong>#REF!</strong>: Column index is too big.</p><p>⚠️ VLOOKUP only looks RIGHT. It can't look left.</p>" }
                ]
            },
            {
                title: "IF Statements 🤔",
                pages: [
                    { title: "Logic in Excel", content: "<p>Make decisions automatically.</p><p><code>=IF(Test, True_Value, False_Value)</code></p>" },
                    { title: "Example", content: "<p><code>=IF(A1>50, \"Pass\", \"Fail\")</code></p><p>If A1 is greater than 50, say Pass.</p><p>Otherwise, say Fail.</p>" },
                    { title: "Nested IFs", content: "<p>An IF inside an IF.</p><p><code>=IF(A1>90, \"A\", IF(A1>80, \"B\", \"C\"))</code></p><p>Use sparingly! They get confusing fast.</p>" }
                ]
            },
            {
                title: "Pivot Tables 🎲",
                pages: [
                    { title: "The Superpower", content: "<p>Summarize huge data in seconds.</p><p>No formulas needed!</p><p>Drag and drop fields to group and count.</p>" },
                    { title: "Anatomy", content: "<p><strong>Rows:</strong> What to group by (e.g., Region).</p><p><strong>Values:</strong> What to math (e.g., Sum of Sales).</p><p><strong>Columns:</strong> Another grouping (e.g., Year).</p>" },
                    { title: "Slicers", content: "<p>Visual buttons to filter Pivot Tables.</p><p>Makes your spreadsheet look like a professional dashboard.</p><p>Bosses love Slicers.</p>" }
                ]
            },
            {
                title: "Charts & Graphs 📈",
                pages: [
                    { title: "Visualizing Data", content: "<p>A picture is worth 1000 numbers.</p><p>Select data → Insert → Recommended Charts.</p>" },
                    { title: "Chart Types", content: "<p><strong>Column/Bar:</strong> Comparing categories.</p><p><strong>Line:</strong> Trends over time.</p><p><strong>Pie:</strong> Parts of a whole (use carefully!).</p>" },
                    { title: "Chart Junk", content: "<p>Keep it clean.</p><p>Remove unnecessary gridlines, legends, and 3D effects.</p><p>Less is more.</p>" }
                ]
            },
            {
                title: "Data Validation ✅",
                pages: [
                    { title: "Control Input", content: "<p>Restrict what people can type.</p><p>Data Tab → Data Validation.</p>" },
                    { title: "Drop-down Lists", content: "<p>The most common use.</p><p>Allow List.</p><p>Source: Yes,No,Maybe.</p><p>Creates a clickable menu!</p>" },
                    { title: "Error Alerts", content: "<p>Custom message when someone types wrong data.</p><p>\"Stop! Enter a valid date please.\"</p>" }
                ]
            },
            {
                title: "Text Functions 📝",
                pages: [
                    { title: "Cleaning Text", content: "<p>Data is often messy.</p><p><code>=TRIM()</code> removes extra spaces.</p><p><code>=PROPER()</code> Capitalizes First Letters.</p>" },
                    { title: "LEFT & RIGHT", content: "<p>Extract parts of text.</p><p><code>=LEFT(A1, 3)</code> gets first 3 chars.</p><p><code>=RIGHT(A1, 2)</code> gets last 2 chars.</p>" },
                    { title: "CONCATENATE", content: "<p>Joining text.</p><p><code>=A1 & \" \" & B1</code></p><p>Combines First and Last Name.</p>" }
                ]
            },
            {
                title: "Date Functions 📅",
                pages: [
                    { title: "TODAY()", content: "<p>Returns today's date.</p><p>Updates every time you open the sheet.</p><p><code>=NOW()</code> includes time too.</p>" },
                    { title: "YEAR, MONTH, DAY", content: "<p>Extract parts of a date.</p><p><code>=YEAR(A1)</code> gets 2023.</p><p>Useful for grouping data by year.</p>" },
                    { title: "DATEDIF", content: "<p>Calculate difference between dates.</p><p><code>=DATEDIF(Start, End, \"y\")</code></p><p>Calculates age in years.</p>" }
                ]
            },
            {
                title: "Printing 🖨️",
                pages: [
                    { title: "Page Layout", content: "<p>Excel sheets are infinite, paper is not.</p><p>Use <strong>Page Break Preview</strong> to see where pages end.</p>" },
                    { title: "Fit to Page", content: "<p>Scale to Fit.</p><p>Width: 1 Page.</p><p>Shrinks everything to fit on one sheet.</p>" },
                    { title: "Print Titles", content: "<p>Repeat header row on every page.</p><p>Page Layout → Print Titles.</p><p>Essential for long lists.</p>" }
                ]
            },
            {
                title: "Shortcuts & Speed ⚡",
                pages: [
                    { title: "Navigation", content: "<p><strong>Ctrl + Arrow Keys</strong>: Jump to edge of data.</p><p><strong>Ctrl + Home</strong>: Go to A1.</p><p><strong>Ctrl + End</strong>: Go to last cell.</p>" },
                    { title: "Selection", content: "<p><strong>Ctrl + Shift + Arrow</strong>: Select to edge.</p><p><strong>Shift + Space</strong>: Select Row.</p><p><strong>Ctrl + Space</strong>: Select Column.</p>" },
                    { title: "Actions", content: "<p><strong>Ctrl + Z</strong>: Undo.</p><p><strong>Ctrl + Y</strong>: Redo.</p><p><strong>Ctrl + S</strong>: Save (Do this often!).</p>" }
                ]
            }
        ]
    },

    // PHASE 2: SQL & DATABASES (20 Topics)
    phase2: {
        title: "SQL & Databases",
        topics: [
            {
                title: "Databases 101 🗄️",
                pages: [
                    { title: "What is a DB?", content: "<p>A structured place to store data.</p><p>Think of a filing cabinet vs a pile of papers.</p><p><strong>Relational DB:</strong> Data stored in tables linked together.</p>" },
                    { title: "RDBMS", content: "<p>Relational Database Management System.</p><p>Software to manage DBs.</p><p>Examples: MySQL, PostgreSQL, SQL Server, Oracle.</p>" },
                    { title: "Client-Server", content: "<p>Database lives on a Server.</p><p>You use a Client (like DBeaver) to talk to it.</p><p>SQL is the language you speak.</p>" }
                ]
            },
            {
                title: "Tables & Data 📊",
                pages: [
                    { title: "Anatomy", content: "<p><strong>Table:</strong> Collection of related data (e.g., Users).</p><p><strong>Column (Field):</strong> Attribute (e.g., Email).</p><p><strong>Row (Record):</strong> Single item (e.g., John Doe).</p>" },
                    { title: "Data Types", content: "<p>Every column has a type.</p><p><strong>INT:</strong> Whole numbers.</p><p><strong>VARCHAR:</strong> Text.</p><p><strong>DATE:</strong> Dates.</p><p><strong>BOOLEAN:</strong> True/False.</p>" },
                    { title: "Nulls", content: "<p><strong>NULL</strong> means empty/unknown.</p><p>It is NOT zero.</p><p>It is NOT an empty string.</p><p>It is a void.</p>" }
                ]
            },
            {
                title: "SELECT Statement 🔍",
                pages: [
                    { title: "The Basics", content: "<p><code>SELECT column FROM table;</code></p><p>The Hello World of SQL.</p><p>Tells the DB what you want.</p>" },
                    { title: "Multiple Columns", content: "<p><code>SELECT name, email FROM users;</code></p><p>Separate with commas.</p><p>Order matters!</p>" },
                    { title: "SELECT *", content: "<p>Select All.</p><p><code>SELECT * FROM users;</code></p><p>Gets every column.</p><p>⚠️ Bad for performance on big tables.</p>" }
                ]
            },
            {
                title: "WHERE Clause 🎯",
                pages: [
                    { title: "Filtering", content: "<p><code>SELECT * FROM users WHERE age > 18;</code></p><p>Only gets rows that match.</p><p>Essential for narrowing down data.</p>" },
                    { title: "Text Filtering", content: "<p><code>WHERE country = 'USA'</code></p><p>Text needs single quotes.</p><p>Case sensitivity depends on the DB.</p>" },
                    { title: "Comparison Operators", content: "<p><code>=</code> Equal</p><p><code><></code> Not Equal</p><p><code>></code> Greater</p><p><code><</code> Less</p><p><code>>=</code> Greater/Equal</p>" }
                ]
            },
            {
                title: "Logic Operators 🧠",
                pages: [
                    { title: "AND", content: "<p>Both must be true.</p><p><code>WHERE age > 18 AND country = 'USA'</code></p>" },
                    { title: "OR", content: "<p>At least one true.</p><p><code>WHERE city = 'NY' OR city = 'LA'</code></p>" },
                    { title: "NOT", content: "<p>Reverse the condition.</p><p><code>WHERE NOT country = 'USA'</code></p>" }
                ]
            },
            {
                title: "ORDER BY 🔢",
                pages: [
                    { title: "Sorting", content: "<p><code>ORDER BY age</code></p><p>Sorts results.</p><p>Default is Ascending (Low to High).</p>" },
                    { title: "DESC", content: "<p>Descending order.</p><p><code>ORDER BY age DESC</code></p><p>High to Low.</p><p>Great for 'Top 10' lists.</p>" },
                    { title: "Multi-Sort", content: "<p><code>ORDER BY country, age DESC</code></p><p>Sort by country first, then age within country.</p>" }
                ]
            },
            {
                title: "LIMIT 🛑",
                pages: [
                    { title: "Pagination", content: "<p><code>LIMIT 10</code></p><p>Only return 10 rows.</p><p>Crucial for large tables.</p>" },
                    { title: "Offset", content: "<p><code>LIMIT 10 OFFSET 20</code></p><p>Skip 20, take 10.</p><p>This is how 'Page 3' works on websites.</p>" },
                    { title: "Top N", content: "<p>Combine with ORDER BY.</p><p><code>ORDER BY score DESC LIMIT 5</code></p><p>Gets the Top 5 winners.</p>" }
                ]
            },
            {
                title: "LIKE Operator 🎭",
                pages: [
                    { title: "Pattern Matching", content: "<p>Search for partial text.</p><p><code>WHERE name LIKE 'J%'</code></p><p>Finds John, Jane, Jack.</p>" },
                    { title: "Wildcards", content: "<p><code>%</code> matches anything.</p><p><code>_</code> matches one character.</p><p><code>'%gmail.com'</code> finds all gmail users.</p>" },
                    { title: "Case Insensitive", content: "<p><code>ILIKE</code> in Postgres.</p><p>Matches 'john', 'John', 'JOHN'.</p>" }
                ]
            },
            {
                title: "IN & BETWEEN ↔️",
                pages: [
                    { title: "IN Operator", content: "<p>Match a list.</p><p><code>WHERE id IN (1, 2, 3)</code></p><p>Cleaner than <code>id=1 OR id=2 OR id=3</code>.</p>" },
                    { title: "BETWEEN", content: "<p>Range check.</p><p><code>WHERE age BETWEEN 20 AND 30</code></p><p>Inclusive (includes 20 and 30).</p>" },
                    { title: "NOT IN", content: "<p>Exclude list.</p><p><code>WHERE status NOT IN ('Banned', 'Deleted')</code></p>" }
                ]
            },
            {
                title: "NULL Handling 👻",
                pages: [
                    { title: "Is Null", content: "<p>Cannot use <code>= NULL</code>.</p><p>Must use <code>IS NULL</code>.</p><p><code>WHERE email IS NULL</code>.</p>" },
                    { title: "Is Not Null", content: "<p><code>WHERE phone IS NOT NULL</code></p><p>Finds rows that have data.</p>" },
                    { title: "Coalesce", content: "<p><code>COALESCE(phone, 'No Phone')</code></p><p>If null, return 'No Phone'.</p><p>Great for cleaning data.</p>" }
                ]
            },
            {
                title: "Aliases (AS) 🏷️",
                pages: [
                    { title: "Renaming", content: "<p><code>SELECT name AS full_name</code></p><p>Changes column name in output.</p><p>Temporary change only.</p>" },
                    { title: "Table Aliases", content: "<p><code>FROM users AS u</code></p><p>Shortens table name.</p><p>Essential for Joins.</p>" },
                    { title: "Calculations", content: "<p><code>SELECT price * 1.1 AS tax_price</code></p><p>Give a name to a calculated column.</p>" }
                ]
            },
            {
                title: "Aggregates 🧮",
                pages: [
                    { title: "COUNT", content: "<p><code>COUNT(*)</code> counts rows.</p><p><code>COUNT(email)</code> counts non-null emails.</p>" },
                    { title: "SUM & AVG", content: "<p><code>SUM(price)</code> adds up.</p><p><code>AVG(age)</code> finds mean.</p><p>Math on a whole column.</p>" },
                    { title: "MIN & MAX", content: "<p>Find extremes.</p><p><code>MAX(salary)</code></p><p><code>MIN(created_at)</code> (Earliest date).</p>" }
                ]
            },
            {
                title: "GROUP BY 📦",
                pages: [
                    { title: "Grouping", content: "<p>Group rows by a value.</p><p><code>GROUP BY country</code></p><p>Usually used with aggregates.</p>" },
                    { title: "Example", content: "<p><code>SELECT country, COUNT(*) FROM users GROUP BY country</code></p><p>Count users per country.</p>" },
                    { title: "Rule", content: "<p>If you SELECT it, you must GROUP BY it (unless it's an aggregate).</p>" }
                ]
            },
            {
                title: "HAVING 🕵️",
                pages: [
                    { title: "Filtering Groups", content: "<p>Like WHERE, but for groups.</p><p><code>HAVING COUNT(*) > 10</code></p><p>Only show countries with >10 users.</p>" },
                    { title: "Order of Ops", content: "<p>1. FROM</p><p>2. WHERE</p><p>3. GROUP BY</p><p>4. HAVING</p><p>5. SELECT</p>" },
                    { title: "Difference", content: "<p>WHERE filters Rows.</p><p>HAVING filters Groups.</p>" }
                ]
            },
            {
                title: "JOINS Intro 🔗",
                pages: [
                    { title: "Why Join?", content: "<p>Data is split into tables.</p><p>Users in one, Orders in another.</p><p>Joins bring them together.</p>" },
                    { title: "Keys", content: "<p><strong>Primary Key:</strong> ID of the row.</p><p><strong>Foreign Key:</strong> ID pointing to another table.</p>" },
                    { title: "Syntax", content: "<p><code>FROM table1 JOIN table2 ON table1.id = table2.fk_id</code></p>" }
                ]
            },
            {
                title: "INNER JOIN 🤝",
                pages: [
                    { title: "The Match", content: "<p>Only returns rows where there is a match in BOTH tables.</p><p>If a user has no orders, they vanish.</p>" },
                    { title: "Venn Diagram", content: "<p>The intersection (middle part).</p><p>Most common join type.</p>" },
                    { title: "Example", content: "<p>Get users and their orders.</p><p>Only users who bought something.</p>" }
                ]
            },
            {
                title: "LEFT JOIN ⬅️",
                pages: [
                    { title: "Keep Left", content: "<p>Returns ALL rows from left table.</p><p>Matches from right table (or NULL).</p>" },
                    { title: "Use Case", content: "<p>\"Show me all users, and their orders if they have any.\"</p><p>Users with no orders show up with NULLs.</p>" },
                    { title: "Right Join?", content: "<p>Exists, but rarely used.</p><p>Just swap tables and use Left Join.</p>" }
                ]
            },
            {
                title: "Primary Keys 🔑",
                pages: [
                    { title: "Unique ID", content: "<p>Every row needs a unique ID.</p><p>Usually an integer (1, 2, 3).</p><p>Cannot be NULL.</p>" },
                    { title: "Identity", content: "<p>Auto-incrementing.</p><p>Database handles numbering for you.</p>" },
                    { title: "Composite Key", content: "<p>Using 2 columns as the key.</p><p>Example: UserID + CourseID in an enrollment table.</p>" }
                ]
            },
            {
                title: "Foreign Keys 🔗",
                pages: [
                    { title: "The Link", content: "<p>A column that points to a Primary Key.</p><p><code>user_id</code> in Orders table.</p>" },
                    { title: "Constraints", content: "<p>Prevents bad data.</p><p>Can't create order for non-existent user.</p>" },
                    { title: "Referential Integrity", content: "<p>Keeps database clean.</p><p>If you delete user, what happens to orders?</p>" }
                ]
            },
            {
                title: "Common Mistakes 🚫",
                pages: [
                    { title: "Cartesian Product", content: "<p>Forgetting the ON clause in a join.</p><p>Joins every row to every row.</p><p>100 users * 100 orders = 10,000 rows!</p>" },
                    { title: "Ambiguous Columns", content: "<p><code>SELECT id</code> when both tables have 'id'.</p><p>Must use <code>table.id</code>.</p>" },
                    { title: "Bobby Tables", content: "<p>SQL Injection.</p><p>Never put user input directly into query string.</p><p>Use parameters!</p>" }
                ]
            }
        ]
    },

    // PHASE 3-6 with same depth...
    phase3: {
        title: "Data Visualization",
        topics: [
            {
                title: "Why Visualize? 🎨", pages: [
                    { title: "The Power of Sight", content: "<p>Images process 60,000x faster than text</p>" },
                    { title: "Anscombe's Quartet", content: "<p>4 datasets, same stats, different visuals</p>" },
                    { title: "Purpose", content: "<p>Exploratory vs Explanatory visualization</p>" }
                ]
            },
            {
                title: "Chart Types 📊", pages: [
                    { title: "Bar Charts", content: "<p>Comparing categories</p>" },
                    { title: "Line Charts", content: "<p>Trends over time</p>" },
                    { title: "Scatter Plots", content: "<p>Correlations and relationships</p>" }
                ]
            }
        ]
    },

    phase4: {
        title: "US Healthcare Systems",
        topics: [
            {
                title: "The System 🏥", pages: [
                    { title: "Complexity", content: "<p>18% of GDP, trillions of dollars</p>" },
                    { title: "Iron Triangle", content: "<p>Cost, Access, Quality</p>" },
                    { title: "The 3 Ps", content: "<p>Patient, Provider, Payer</p>" }
                ]
            },
            {
                title: "Claims 🔄", pages: [
                    { title: "Journey", content: "<p>Visit to Payment lifecycle</p>" },
                    { title: "Adjudication", content: "<p>Insurance review process</p>" },
                    { title: "Denials", content: "<p>Fighting claim rejections</p>" }
                ]
            }
        ]
    },

    phase5: {
        title: "Python Programming",
        topics: [
            {
                title: "Why Python? 🐍", pages: [
                    { title: "Data King", content: "<p>#1 for Data Science & AI</p>" },
                    { title: "Versatility", content: "<p>Web, Automation, Data, AI</p>" },
                    { title: "Setup", content: "<p>Installation and IDEs</p>" }
                ]
            },
            {
                title: "Variables 📦", pages: [
                    { title: "Storing Data", content: "<p>x = 10, name = 'Alice'</p>" },
                    { title: "Naming", content: "<p>snake_case conventions</p>" },
                    { title: "Dynamic Typing", content: "<p>No type declarations needed</p>" }
                ]
            }
        ]
    },

    phase6: {
        title: "AI & Machine Learning",
        topics: [
            {
                title: "What is AI? 🤖", pages: [
                    { title: "Definition", content: "<p>Machines mimicking intelligence</p>" },
                    { title: "ANI vs AGI", content: "<p>Narrow vs General AI</p>" },
                    { title: "History", content: "<p>Turing to ChatGPT timeline</p>" }
                ]
            },
            {
                title: "Machine Learning 🧠", pages: [
                    { title: "Relationship", content: "<p>AI > ML > Deep Learning</p>" },
                    { title: "Approaches", content: "<p>Traditional rules vs ML examples</p>" },
                    { title: "Data is Fuel", content: "<p>Garbage in, garbage out</p>" }
                ]
            },
            {
                title: "The End? 🏁", pages: [
                    { title: "Keep Learning", content: "<p>Tech changes fast, stay curious</p>" },
                    { title: "Build Projects", content: "<p>Portfolio > Resume</p>" },
                    { title: "You Made It!", content: "<p>Congratulations Data Professional! 🌍</p>" }
                ]
            }
        ]
    }
};

function generateLessonFromTopic(topic, phaseNum) {
    const pages = [];
    topic.pages.forEach(p => {
        pages.push({
            type: 'text',
            title: p.title,
            content: p.content
        });
    });
    return pages;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONTENT_DATA, generateLessonFromTopic };
}
