//MySQL database
const mysql = require("mysql2");

//code that connects the application to MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    //Your MySQL username for now it is root,
    user: "root",
    //Your MySQL password
    password: "travis127",
    database: "company_db",
  },
  
  console.log("connected to db")
  );

  module.exports = db;