-- USE employee_db;

-- INSERT INTO department (names)
-- VALUES ("Sales"),
--     ("Engineering"),
--     ("Human Resources"),
--     ("Legal"),
--     ("Finance"),
--     ("Artist"),
--     ("Business");
    
-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("CEO", 100000, 7),
--     ("Software Developer", 70000, 2),
--     ("Engineer", 60000, 3),
--     ("Lawyer", 60000, 4),
--     ("Actuary", 60000, 5),
--     ("Artist", 70000, 6),
--     ("Salesperson", 40000, 1);
    
INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Bobby", "Knight", 1, NULL),
	("Bill", "Jones", 2, 1),
    ("Mike", "Jones", 3, 1),
    ("Charlie", "Brown", 4, 1),
    ("David", "Banner", 5, 1),
    ("Scottie", "Pippen", 6, 1),
    ("Alvin", "Karama", 1, 1);
-- SELECT e.id,
--     e.first_name,
--     e.last_name,
--     d.name AS department,
--     r.title,
--     r.salary,
--     CONCAT_WS(" ", m.first_name, m.last_name) AS manager
-- FROM employee e
--     LEFT JOIN employee m ON m.id = e.manager_id
--     INNER JOIN roles r ON e.role_id = r.id
--     INNER JOIN department d ON r.department_id = d.id
-- ORDER BY e.id ASC;
-- -- Query for view all roles --
-- SELECT r.id,
--     r.title,
--     r.salary,
--     d.name as Department_Name
-- FROM roles AS r
--     INNER JOIN department AS d ON r.department_id = d.id;
-- --Query for getting employees --
-- SELECT id,
--     CONCAT_WS(' ', first_name, last_name) AS Employee_Name
-- FROM employee -- Query for updating --
-- UPDATE employee
-- SET roles_id = 5
-- WHERE id = 10;
-- UPDATE employee
-- SET ?
-- WHERE ?;
-- -- Query for Delete --
-- DELETE FROM department
-- WHERE id = 15;