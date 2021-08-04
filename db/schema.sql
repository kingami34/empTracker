
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

DROP DATABASE IF EXISTS department;
CREATE TABLE department (
  id_department INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
DROP DATABASE IF EXISTS roles;
CREATE TABLE roles (  id_role: INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT, 
  PRIMARY KEY (department_id)REFERENCES department(department_id) ON DELETE CASCADE
);
DROP DATABASE IF EXISTS employee;
CREATE TABLE employee (
  id_employee INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT , 
  manager_id INT NOT NULL, 
  PRIMARY KEY (role_id)REFERENCES rolee(id_role) ON DELETE SET NULL
  PRIMARY KEY (manager_id)REFERENCES manager(manager_id)
);




