const db = require("./db/connection");

const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;