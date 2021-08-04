
const inquirer = require('inquirer');

const mysql = require('mysql2');


// Connect to database
const connection = mysql.createConnection(
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

function choiceDepartment(){
    inquirer.prompt([
     {
        type: "list",
        name: "department",
        message: "What would you like to do",
        choices: 
        ['View Departments',
         'View Roles',
          'View Employees', 
          'Add Department',
          'Add Role',
          'Add Employee',
        'Update Employee Role',
        ]
     },  
    ])
  };
    choiceDepartment();




