INSERT INTO department (name)
VALUES
('SALES'),
('FINANCE'),
('LEGAL'),
('ENGINEER'), 



INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 90000, 1),
('Lead Engineer', 125000, 2),
('Software Engineer', 160000, 2),
('Account Manager', 125000, 3),
('Accountant', 160000, 3),
('Legal Team Lead', 90000, 4);
('Operations', 250000, 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John','Doe', 6, 1),
('Sally','Jane', 4, 2),
('Travis', 'Ramcharran', 2, 3),
('Robb', 'Stark', 7, 4),
('Manager', 'Managers', 4, null),
('Rhaegar', 'Targaryen', 1, 1),
