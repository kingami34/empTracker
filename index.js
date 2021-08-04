
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

  console.log('Start the employee game.')
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
        'Stop'
        ]
     }, 
    
    ])
  
//   choiceDepartment()

    .then(function({department}){
        switch (department) {
            case "View Departments":
            viewDept();
            break;
            case "View Roles":
                viewRole();
                break;
                case "View Employees":
                viewEmployee();
                break;
                case "Add Department":
                addDept();
                break;
                case "Add Role":
                addRole();
                break;
                case "Add Employee":
                addEmployee();
                break;
                case "Update Employee Role":
                updateRole();
                break;
                case "Stop":
                connection.stop();
                break;
        }
    })
}
db.query('SELECT * FROM rolee', function(err,results){
    console.log(results);
})
choiceDepartment();

// db.query('SELECT * FROM rolee', function(err,results){
//     console.log(results);
// })
