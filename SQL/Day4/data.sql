create database day4;

use day4;

create table employees(
     employee_id int primary key Auto_increment,
     employee_name varchar(100) not null,
     department varchar(50) not null,
     salary int
     
);

insert into employees (employee_name, department,salary) values ("samuvel", "java script", 25000);
insert into employees (employee_name, department,salary) values ("mahesh", "python", 25000);
insert into employees (employee_name, department,salary) values ("deepak", "java", 25000);
insert into employees (employee_name, department,salary) values ("lokesh", "python", 25000);




update employees set department = "it" where  employee_id  = 1;
update employees set department = "it" where  employee_id  = 2;
update employees set department = "it" where  employee_id  = 4;
update employees set department = "engineering" where  employee_id  = 3;

delete from employees  where employee_id = 5;
delete from employees  where employee_id = 6;

select * from employees;
select * from employees where department = "it" and salary > 20000;
select department, count(department) from employees group by department;
select department, avg(salary) from employees group by  department;


use college_db;
select * from student;
insert into student(student_Name, student_age, student_email, student_city) values ('Samuvel', 22, 'samuvel@gmail.com', 'chennai');
insert into student(student_Name, student_age, student_email, student_city) values('Mahesh', 21, 'mahesh@gmail.com', 'Chennai');
insert into student(student_Name, student_age, student_email, student_city) values ('Deepak', 23, 'deepak@gmail.com', 'vellore');
insert into student(student_Name, student_age, student_email, student_city) values('Lokesh', 20, 'lokesh@gmail.com', 'chennai');

select * from student where student_age between 22 and 25;