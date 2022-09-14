const db = require("./db/connection");

const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected.");
    PromptUser();
  });

  PromptUser = () => {
    console.log(`
    =================
    Review Company
    =================
    `);

    inquirer
    .prompt({
      type: "list",
      
      name: "action",
      
      message: "What actions would you like to perform?",
      
      pageSize: 15,
      choices: [
        "View all Departments",
        
        "View all Roles",
        
        "View all Employees",
        
        "Add a Department",
        
        "Add a Role",
        
        "Add an Employee",
        
        "Update an Employee Role",
        "Exit",
      ],
    })
    .then(function ({ action }) {
      switch (action) {
        case "View all Departments":
          viewDepartment();
          break;
        case "View all Roles":
          viewRoles();
          break;
        case "View all Employees":
          viewEmployees();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          updateEmployee();
          break;
        case "Exit":
          console.log(`
          =================
          Thank you
          =================
          `);
          db.end();
          break;
      }
    });
};

viewDepartment = () => {
    console.log("Displaying departments\n");
    db.query(
      "SELECT * FROM department",
      function (err, results) {
        
        if (err) throw err;
        
        console.table(results);
        
        PromptUser();
      }
    );
  };

  viewRoles = () => {
    console.log("Displaying roles\n");
    db.query(
      `SELECT role.id, 
      role.title, 
      department.name AS department FROM role INNER JOIN department ON role.department_id = department.id`,
      
      function (err, results) {
        
        if (err) throw err;
        
        console.table(results);
        
        PromptUser();
      }
    );
  };

  viewEmployees = () => {
    console.log("Displaying employees\n");
    db.query(
      `SELECT employee.id,

      employee.first_name,
      
      employee.last_name,
      
      role.title,
      
      department.name,
      
      role.salary,
      
      CONCAT (manager.first_name, " ", manager.last_name) AS manager
      
      FROM employee
      
      LEFT JOIN role ON employee.role_id = role.id
      
      LEFT JOIN department ON role.department_id = department.id
      
      LEFT JOIN employee manager ON employee.manager_id = manager.id`,
      
      function (err, results) {
        
        if (err) throw err;
        
        console.table(results);
        
        PromptUser();
      }
    );
  };

  addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "Department",

          message: "Add new department",
          
          validate: (Department) => {
            
            if (Department) {
              return true;
            } else {
              console.log("Please enter a department");
              return false;
            }
          },
        },
      ])
      .then((answer) => {
        
        db.query(
          `INSERT INTO department (name) VALUES (?)`,
          
          answer.Department,
          (err, results) => {
            if (err) throw err;
            console.log(" Added " + answer.Department + " to departments!");
            
            PromptUser();
          }
        );
      });
  };



  addRole = () => {
    inquirer
      .prompt([
        {
          
            type: "input",
          
            name: "role",
          
            message: "Add a role",
          
            validate: (addRole) => {
            
                if (addRole) {
              return true;
            } else {
              console.log("Please enter a role");
              return false;
            }
          },
        },
        {
          type: "number",
          
          name: "salary",
          
          message: "Enter the salary",
          validate: (value) => {
            if (isNaN(value) === false) {
              return true;
            } else {
              console.log("Please enter a salary");
              return false;
            }
          },
        },
        {
          type: "number",
          
          name: "department_id",
          
          message: "Enter department id number",
          validate: (value) => {
            
            if (isNaN(value) === false) {
              return true;
            } else {
              console.log("Please enter the department id");
              return false;
            }
          },
        },
      ])
      .then((answer) => {
        db.query(
          "INSERT INTO role SET ?",
          {
            
            title: answer.role,
            
            salary: answer.salary,
            
            department_id: answer.department_id,
          },
          (err) => {
            if (err) throw err;
            console.log(" Added " + answer.role + " to roles!");
            PromptUser();
          }
        );
      });
  };