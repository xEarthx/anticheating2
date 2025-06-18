create database myproject;
use myproject;

CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY,
    username varchar(50) NOT NULL,
    password varchar(255) NOT NULL,
    name varchar(50) NOT NULL,
    lname varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    role ENUM('admin','user')
);

insert into users(username, password, name, lname, email, role)
values ('admin', '1234', 'AmEarth', 'ad', 'sqwer1324@gmail.com', 'admin');
