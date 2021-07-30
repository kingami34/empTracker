const mysql = require('mysql');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 5001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Mastery$28',
    database: 'employee'
  },
  console.log(`Connected to the employee database.`)
);
