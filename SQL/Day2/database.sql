create database college_db;

use college_db;
create table student(
       student_id int primary key auto_increment,
       student_Name varchar(30) not null,
       student_age int check(student_age >=18),
       student_email varchar(50) unique,
       student_city varchar(30) Default "chennai",
       adminstion_date date
       
);

select* from student;

use college_db;
create table employe_management(
    emp_id int primary key auto_increment,
    emp_name varchar(20) not null,
    email varchar(38) unique,
    salary DECIMAL(10,2)  check(salary > 10000),
    status varchar(20) default "active"
);


use college_db;
create table product_table(
	
    product_id int primary key auto_increment,
    product_name varchar(150) not null,
    product_code varchar(50) unique,
    category varchar(50) not null,
    price int check(price > 0),
    stock int default 0,
    expiry_date date,
    is_available boolean default true
);

create table students(
    student_id int primary key auto_increment,
      student_name varchar(100) not null,
      age int check( age >18),
      email varchar(59) unique,
      mobile_number int not null,
      course varchar(49) not null,
      fees int check(fees > 0),
      admission_date date,
      city varchar(30) default "chennai"


);

select * from students
