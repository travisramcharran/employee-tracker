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