
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
    .then((answers) => {
        console.info('Answer:', answers.department);
        // choiceDepartment()
    })
    
}
choiceDepartment();


getRole = () => {
    connection.query("SELECT id, title FROM role", (err, res) => {
      if (err) throw err;
      role = res;
      console.table(role);
    })
  };
  
  getDepartment = () => {
    connection.query("SELECT id, name FROM department", (err, res) => {
      if (err) throw err;
      department = res;
      console.log(department);
    })
  };
  
  getManager = () => {
    connection.query("SELECT id, first_name, last_name, CONCAT_WS(' ', first_name, last_name) AS managers FROM employee", (err, res) => {
      if (err) throw err;
      manager = res;
      console.table(manager);
    })
  };
  
  getEmployee = () => {
    connection.query("SELECT id, CONCAT_WS(' ', first_name, last_name) AS Employee_Name FROM employee", (err, res) => {
      if (err) throw err;
      employees = res;
      console.table(employee);
    })
  };


 
