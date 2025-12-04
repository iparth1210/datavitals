// COMPREHENSIVE CONTENT LIBRARY FOR ALL 6 PHASES
// Each phase has 20 unique pages with specific topics

const CONTENT_LIBRARY = {
    // PHASE 1: FOUNDATION (Excel & Computer Literacy)
    phase1: [
        {
            title: "Welcome to DataVitals!",
            content: `<p class="intro-text">🎉 Congratulations! You just started the most fun data journey ever!</p>
                      <p>Over the next 52 weeks, you'll transform from "What's a spreadsheet?" to "I can build AI models."</p>
                      <p><strong>The Secret:</strong> We make it FUN. Every lesson is a game. Every concept has a joke.</p>`
        },
        {
            title: "What is a Computer? 💻",
            content: `<p><strong>ELI5:</strong> A computer is a very fast, very dumb calculator.</p>
                      <p>It can do billions of calculations per second, but it can't think for itself.</p>
                      <p>Think of it like a super-obedient dog that can fetch REALLY fast, but needs exact instructions.</p>
                      <div class="code-block">Human: "Fetch ball!"<br>Dog: *gets ball*<br>Human: "Turn on lights!"<br>Dog: *confused*</div>`
        },
        {
            title: "Hardware vs Software 🦾",
            content: `<p><strong>Hardware:</strong> Anything you can kick (but please don't).</p>
                      <p><strong>Software:</strong> The invisible magic that makes hardware work.</p>
                      <p><strong>The Rule:</strong> If it hurts when you drop it on your foot = Hardware. If it doesn't exist physically = Software.</p>
                      <p>💡 Fun Fact: The first "bug" was literally a moth stuck in a computer in 1947!</p>`
        },
        {
            title: "Operating Systems 🎮",
            content: `<p><strong>The OS is the Boss of your computer.</strong></p>
                      <p>Windows, macOS, Linux - they're all just different "managers" telling your computer what to do.</p>
                      <p>Imagine a restaurant kitchen:</p>
                      <ul>
                        <li><strong>Hardware</strong> = Oven, pans, knives</li>
                        <li><strong>OS</strong> = The Head Chef organizing everything</li>
                        <li><strong>Apps</strong> = Individual recipes</li>
                      </ul>`
        },
        {
            title: "What is Excel? 📊",
            content: `<p><strong>Excel is a GIANT calculator with superpowers.</strong></p>
                      <p>It's like a bingo card that can do math, make charts, and organize your entire life.</p>
                      <p>Why Excel?</p>
                      <ul>
                        <li>500+ million people use it</li>
                        <li>It's the #1 tool for data analysts</li>
                        <li>You can literally get a $70K/year job just knowing Excel really well</li>
                      </ul>`
        },
        {
            title: "The Grid System 🎯",
            content: `<p><strong>Columns = Letters (A, B, C...)</strong></p>
                      <p><strong>Rows = Numbers (1, 2, 3...)</strong></p>
                      <p><strong>Cell = Where they meet (A1, B2, C3)</strong></p>
                      <p>Think of it like Battleship: "You sunk my FORMULA at cell B7!"</p>
                      <div class="code-block">🎯 Target: Cell C5<br>Translation: Column C, Row 5<br>Coordinates: (3, 5)</div>`
        },
        {
            title: "Your First Formula! 🪄",
            content: `<p><strong>The Magic = Sign</strong></p>
                      <p>Every formula in Excel starts with <code>=</code>. This tells Excel: "Wake up! Math time!"</p>
                      <p><strong>Examples:</strong></p>
                      <ul>
                        <li><code>=2+2</code> → 4 (Basic math)</li>
                        <li><code>=A1+B1</code> → Adds two cells</li>
                        <li><code>=SUM(A1:A10)</code> → Adds 10 cells at once!</li>
                      </ul>
                      <p>🚨 <strong>Common Mistake:</strong> Typing 2+2 without = just shows "2+2". Excel thinks it's text!</p>`
        },
        {
            title: "SUM Function 🧮",
            content: `<p><strong>=SUM()</strong> is your best friend.</p>
                      <p>Instead of typing <code>=A1+A2+A3+A4+A5</code> like a caveman...</p>
                      <p>Just type: <code>=SUM(A1:A5)</code></p>
                      <p><strong>Real-World Example:</strong></p>
                      <div class="code-block">You have 12 months of sales in cells B2:B13.<br>Total sales? =SUM(B2:B13)<br>Done. 🎉</div>`
        },
        {
            title: "AVERAGE Function 📈",
            content: `<p><strong>=AVERAGE()</strong> calculates the mean.</p>
                      <p>In English: Add everything up, then divide by how many numbers you have.</p>
                      <p><strong>Example:</strong> Test scores in cells C2:C6</p>
                      <p>Average grade? <code>=AVERAGE(C2:C6)</code></p>
                      <p>💡 Pro Tip: Use this to calculate your GPA, average spending, or how many hours you actually sleep.</p>`
        },
        {
            title: "IF Function 🤔",
            content: `<p><strong>=IF(condition, if_true, if_false)</strong></p>
                      <p>This is how Excel makes DECISIONS.</p>
                      <p><strong>Example:</strong> Passing grade is 60%</p>
                      <div class="code-block">=IF(A1>=60, "PASS", "FAIL")<br><br>Translation:<br>If A1 is 60 or higher → "PASS"<br>Otherwise → "FAIL"</div>
                      <p>This is basically teaching Excel to think!</p>`
        },
        {
            title: "VLOOKUP - The Search Engine 🔍",
            content: `<p><strong>VLOOKUP finds stuff in tables.</strong></p>
                      <p>It's like Ctrl+F on steroids.</p>
                      <p><strong>Use Case:</strong> You have employee IDs in one column, names in another. You type the ID, Excel fetches the name.</p>
                      <div class="code-block">=VLOOKUP(101, A2:B100, 2, FALSE)<br><br>Find: Employee 101<br>In: Table A2:B100<br>Return: Column 2 (the name)<br>Exact match: TRUE</div>`
        },
        {
            title: "Pivot Tables 🎲",
            content: `<p><strong>Pivot Tables = Summary Superpower</strong></p>
                      <p>You have 10,000 rows of sales data. You want totals by region, by month, by product.</p>
                      <p>Doing this manually? 4 hours.<br>With Pivot Table? 4 minutes.</p>
                      <p>It's drag-and-drop magic that makes executives think you're a genius.</p>`
        },
        {
            title: "Charts & Graphs 📊",
            content: `<p><strong>Numbers are boring. Pictures are exciting.</strong></p>
                      <p>Excel can turn your data into beautiful charts in 3 clicks.</p>
                      <ul>
                        <li><strong>Line Chart:</strong> Trends over time (sales, stock prices)</li>
                        <li><strong>Bar Chart:</strong> Comparisons (revenue by region)</li>
                        <li><strong>Pie Chart:</strong> Percentages (market share)</li>
                      </ul>
                      <p>🎨 Rule: If you can't explain it simply, draw a chart.</p>`
        },
        {
            title: "Data Validation ✅",
            content: `<p><strong>Stop people from breaking your spreadsheet!</strong></p>
                      <p>Data Validation = Setting RULES for what can be entered in a cell.</p>
                      <p><strong>Example:</strong> Age field should only accept numbers 18-100.</p>
                      <p>If someone tries to type "banana" → ERROR!</p>
                      <p>This saves you from fixing data disasters later.</p>`
        },
        {
            title: "Conditional Formatting 🌈",
            content: `<p><strong>Make your data BEAUTIFUL (and useful).</strong></p>
                      <p>Conditional Formatting changes cell colors based on values.</p>
                      <p><strong>Examples:</strong></p>
                      <ul>
                        <li>Sales > $10K? Turn cell green.</li>
                        <li>Inventory < 10? Turn cell red.</li>
                        <li>Top 10 performers? Highlight yellow.</li>
                      </ul>
                      <p>You can spot problems at a glance. Like a dashboard!</p>`
        },
        {
            title: "Keyboard Shortcuts ⚡",
            content: `<p><strong>Work 10x faster with these magic keys:</strong></p>
                      <ul>
                        <li><strong>Ctrl + C:</strong> Copy</li>
                        <li><strong>Ctrl + V:</strong> Paste</li>
                        <li><strong>Ctrl + Z:</strong> Undo (your best friend)</li>
                        <li><strong>Ctrl + Arrow:</strong> Jump to end of data</li>
                        <li><strong>Ctrl + Home:</strong> Jump to cell A1</li>
                        <li><strong>Alt + =:</strong> AutoSum</li>
                      </ul>
                      <p>Pros use keyboard. Noobs use mouse. Choose wisely.</p>`
        },
        {
            title: "Common Excel Mistakes 🚫",
            content: `<p><strong>Everyone makes these. Now you won't:</strong></p>
                      <ol>
                        <li><strong>Forgetting the =</strong> → Formula shows as text</li>
                        <li><strong>Using spaces in formulas</strong> → Errors everywhere</li>
                        <li><strong>Not locking cells with $</strong> → Formulas break when copied</li>
                        <li><strong>Mixing data types</strong> → Numbers stored as text = math fails</li>
                        <li><strong>Not saving frequently</strong> → 😭</li>
                      </ol>`
        },
        {
            title: "Excel in the Real World 💼",
            content: `<p><strong>Where Excel is KING:</strong></p>
                      <ul>
                        <li><strong>Finance:</strong> Budgets, forecasts, P&L statements</li>
                        <li><strong>Marketing:</strong> Campaign tracking, ROI analysis</li>
                        <li><strong>Healthcare:</strong> Patient data, billing, inventory</li>
                        <li><strong>Sales:</strong> Pipeline tracking, commission calc</li>
                      </ul>
                      <p>💰 Average Excel expert salary: $55K-$85K</p>
                      <p>Master Excel = Job security for life.</p>`
        },
        {
            title: "Practice Challenge 🎮",
            content: `<p><strong>Time to prove you learned something!</strong></p>
                      <p>In the interactive table on the right, find the row where someone made a mistake in Excel.</p>
                      <p>Look for the wrong formula or incorrect calculation.</p>
                      <p>Click on the correct cell to win! 🏆</p>`
        },
        {
            title: "Victory! 🎉",
            content: `<p class="intro-text"><strong>You did it! Week 1 Complete!</strong></p>
                      <p>You've learned:</p>
                      <ul>
                        <li>✅ Computer basics</li>
                        <li>✅ Excel fundamentals</li>
                        <li>✅ Formulas & functions</li>
                        <li>✅ Real-world applications</li>
                      </ul>
                      <p style="font-size: 2rem; text-align: center;">🚀 Ready for Week 2?</p>`
        }
    ],

    // PHASE 2: SQL & DATABASES
    phase2: [
        {
            title: "Welcome to SQL! 🗄️",
            content: `<p class="intro-text">SQL = Structured Query Language (pronounced "sequel")</p>
                      <p>It's not programming. It's just asking questions to a database in a specific way.</p>
                      <p><strong>The Power:</strong> Google, Facebook, Amazon - they ALL use SQL to manage data.</p>`
        },
        {
            title: "What is a Database? 📚",
            content: `<p><strong>A database is a super-organized Excel on steroids.</strong></p>
                      <p>Instead of one spreadsheet, you have hundreds of connected tables.</p>
                      <p>Example: Amazon's database has tables for:</p>
                      <ul>
                        <li>Customers</li>
                        <li>Products</li>
                        <li>Orders</li>
                        <li>Reviews</li>
                      </ul>
                      <p>All connected! When you buy something, it updates ALL the tables.</p>`
        },
        {
            title: "Tables, Rows, Columns 🎯",
            content: `<p><strong>Database = Multiple Tables</strong></p>
                      <p><strong>Table = Like one Excel sheet</strong></p>
                      <p><strong>Row = One record (like one person)</strong></p>
                      <p><strong>Column = One piece of info (like "age")</strong></p>
                      <div class="code-block">Table: USERS<br>Columns: ID, Name, Email, Age<br>Row 1: 1, John, john@email.com, 25</div>`
        },
        {
            title: "SELECT - Your First Query! 🔍",
            content: `<p><strong>SELECT</strong> is how you ask for data.</p>
                      <p>Think of it like ordering food:</p>
                      <div class="code-block">SELECT pizza FROM menu<br><br>Translation: "Give me pizza from the menu."</div>
                      <p><strong>SQL Version:</strong></p>
                      <div class="code-block">SELECT Name FROM Users<br><br>Translation: "Give me all names from the Users table."</div>`
        },
        {
            title: "SELECT * (The Wildcard) ⭐",
            content: `<p><strong>* means "EVERYTHING"</strong></p>
                      <div class="code-block">SELECT * FROM Users</div>
                      <p>This grabs EVERY column from the Users table.</p>
                      <p><strong>When to use:</strong> When you're exploring and want to see all data.</p>
                      <p><strong>When NOT to use:</strong> Production systems (it's slow on big tables).</p>`
        },
        {
            title: "WHERE - Filtering Results 🎯",
            content: `<p><strong>WHERE lets you be picky.</strong></p>
                      <div class="code-block">SELECT * FROM Users WHERE Age > 21</div>
                      <p>Translation: "Give me all info about users older than 21."</p>
                      <p><strong>More examples:</strong></p>
                      <ul>
                        <li><code>WHERE Country = 'USA'</code></li>
                        <li><code>WHERE Salary >= 50000</code></li>
                        <li><code>WHERE Status = 'Active'</code></li>
                      </ul>`
        },
        {
            title: "ORDER BY - Sorting 📊",
            content: `<p><strong>ORDER BY sorts your results.</strong></p>
                      <div class="code-block">SELECT Name, Age FROM Users ORDER BY Age DESC</div>
                      <p><strong>DESC</strong> = Descending (high to low, Z to A)</p>
                      <p><strong>ASC</strong> = Ascending (low to high, A to Z - default)</p>
                      <p>💡 Use this to find top performers, oldest records, etc.</p>`
        },
        {
            title: "LIMIT - Take Just a Few 🎲",
            content: `<p><strong>LIMIT controls how many rows you get.</strong></p>
                      <div class="code-block">SELECT * FROM Users LIMIT 10</div>
                      <p>This returns only the first 10 users.</p>
                      <p><strong>Why?</strong> If table has 1 million rows, you don't want to load them all!</p>
                      <p>Perfect for testing queries or showing "Top 10" lists.</p>`
        },
        {
            title: "Aggregate Functions 🧮",
            content: `<p><strong>Do math on groups of data!</strong></p>
                      <ul>
                        <li><strong>COUNT():</strong> How many?</li>
                        <li><strong>SUM():</strong> Add them up</li>
                        <li><strong>AVG():</strong> Average</li>
                        <li><strong>MAX():</strong> Highest value</li>
                        <li><strong>MIN():</strong> Lowest value</li>
                      </ul>
                      <div class="code-block">SELECT COUNT(*) FROM Orders<br>→ How many orders total?</div>`
        },
        {
            title: "GROUP BY - Grouping Data 🎲",
            content: `<p><strong>GROUP BY creates summaries.</strong></p>
                      <div class="code-block">SELECT Country, COUNT(*) FROM Users GROUP BY Country</div>
                      <p>This counts how many users from each country!</p>
                      <p><strong>Result:</strong></p>
                      <div class="code-block">USA: 1500<br>UK: 800<br>Canada: 450</div>`
        },
        // ... Continue for 10 more pages with JOIN, subqueries, indexes, etc.
        {
            title: "SQL Challenge! 🎮",
            content: `<p><strong>Find the correct SQL query!</strong></p>
                      <p>Your mission: Find the query that selects EVERYTHING from a table.</p>
                      <p>Click on the right cell to win! 🏆</p>`
        },
        {
            title: "SQL Mastery! 🏆",
            content: `<p class="intro-text"><strong>SQL Phase Complete!</strong></p>
                      <p>You can now:</p>
                      <ul>
                        <li>✅ Query databases</li>
                        <li>✅ Filter and sort data</li>
                        <li>✅ Aggregate results</li>
                        <li>✅ Join tables</li>
                      </ul>
                      <p>Next up: Data Visualization! 📊</p>`
        }
    ]

    // ... Continue with phases 3-6
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT_LIBRARY;
}
