const inquirer = require('inquirer');

const mysql = require('mysql2');


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

function choiceDepartment(){
    inquirer.prompt([
     {
        type: "input",
        name: "department",
        message: "What would you like to do",
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department']
     },  

    ])
    .then((answers) => {
        console.info('Answer:', answers.department);
        choiceDepartment()
    })
}

