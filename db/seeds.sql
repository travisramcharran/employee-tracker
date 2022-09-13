INSERT INTO department (name)
VALUES
('LEGAL'),
('ENGINEER');
('SALES'),
('FINANCE'), 



INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 90000, 1),
('Software Engineer', 125000, 2),
('Lead Engineer', 160000, 2),
('Accountant', 125000, 3),
('Account Manager', 160000, 3),
('Operations', 90000, 4);
('Legal Team Lead', 250000, 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John','Doe', 6, 1),
('Sally','Doe', 4, 2),
('Travis', 'Ramcharran', 2, 3),
('Robb', 'Stark', 7, 4),
('Manager', 'Manager Last Name', 4, null),
('Rhaegar', 'Targaryen', 1, 1),
