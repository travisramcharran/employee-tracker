# Employee Tracker
Module 12 HW. 

## Installation and Execution
npm init --y 
npm install inquirer 8.0.0
npm install mysql2 
npm install jest --save-dev 
npm install console.table --save
mysql -u root -p
source db/schema.sql
source db/seeds/sql
quit mysql
npm start
node server.js

## Project Description and Usage
 A command line application that allows the user to manipulate data in a SQL database. The app is designed to interact with 3 SQL databases: "employees," "roles", "departments." Each employee has a "title" and is a member of the "roles" database, and each role is associated with a member of the "departments" database.

### Video Demonstration
[link](https://drive.google.com/file/d/174MgxGBAbaOTh8HO72qMDXK9OQSNZ4T1/view)