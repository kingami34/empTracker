DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;
DROP DATABASE IF EXISTS department;
CREATE TABLE department (
  department_id INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
DROP DATABASE IF EXISTS roles;
CREATE TABLE roles (
  roles_id: INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id_department) ON DELETE CASCADE
);
DROP DATABASE IF EXISTS employee;
CREATE TABLE employee (
  employee_id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT,
  manager_id INT NOT NULL,
  FOREIGN KEY (roles_id) REFERENCES roles(roles_id) ON DELETE 
  FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);