
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
    .then(function(answer) {
        switch (answer.action) {
          case "View Employees":
            viewEmp();
            break;
          case "View Departments":
            viewDept();
            break;
          case "View Roles":
            viewRole();
            break;
          case "Add Employees":
            getEmployee();
            break;
          case "Add Departments":
            getDepartment();
            break;
          case "Add Roles":
            getRole();
            break;
          case "Update Employee Roles":
            updateEmployee();
            break;
        }
      });
  };

choiceDepartment();


function viewEmp() {
    connection.query(
      "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;",
      function(err, res) {
        if (err) throw err;
        console.table(res);
        startUp();
      }
    );
  };
  
  function viewDept() {
    connection.query("SELECT * from department", function(err, res) {
      if (err) throw err;
      console.table(res);
      startUp();
    });
  };
  
  function viewRole() {
    connection.query("SELECT * from role", function(err, res) {
      if (err) throw err;
      console.table(res);
      startUp();
    });
  };
  
  function updateEmployee (empID, roleID){
  connection.query("UPDATE employee SET role_id = ? WHERE employee_id = ?", [roleID, empID])
  };
  
  function getEmployee() {
    var questions = [
      {
        type: "input",
        message: "What's the employee's first name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What's the employee's last name?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What's the employee's title (role_id)?",
        name: "titleID"
      },
      {
        type: "input",
        message: "Who's the employee's manager (employee_id)?",
        name: "managerID"
      }
    ];
    inquirer.prompt(questions).then(function(answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.titleID,
          manager_id: answer.managerID,
        },
        function(error) {
          if (error) throw error;
          updateEmployee(answer.titleID, answer.managerID);
          viewEmp();
        }
      );
    });
  };
  
  function getDepartment() {
    inquirer
      .prompt({
        type: "input",
        message: "What would you like to name the new department?",
        name: "department"
      })
      .then(function(answer) {
          console.log(answer.department);
        connection.query("INSERT INTO department SET ?",
          {
            name: answer.department,
          },
          function(err, res) {
            if (err) throw err;
            startUp();
          });
      });
  };
  
  function getRole() {
    var questions = [
      {
        type: "input",
        message: "What type of role would you like to add?",
        name: "title"
      },
      {
        type: "input",
        message: "In what department is the new role?",
        name: "id"
      },
      {
        type: "list",
        message: "What is the salary for this role?",
        name: "salary"
      }
    ];
    inquirer.prompt(questions).then(function(answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          department_id: answer.id,
          salary: answer.salary
        },
        function(error, res) {
          if (error) throw error;
          startUp();
        }
      );
    });
  };
  function updateEmployee() {
    var employees = viewEmp();
    var empChoices = employees.map(index => {
      id: id;
    })
    inquirer.prompt({
     type: "list",
     name: "role id",
    message: " WHich role would you like to assign the employee?",
    choices: empChoices
  
    })
    connection.query("UPDATE employee SET role_id = ? WHERE employee_id = ?", [roleID, empID])
  
  };