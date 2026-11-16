create database normalization;
use normalization;

create table student(
   student_id int primary key auto_increment,
   student_name varchar(50)
);

alter table student drop column student_course;
insert into student (student_name) values ('deepak'),('mahesh'),('samuvel');
select * from student;

create table course(
	course_id int  auto_increment,
    course_name varchar(50),
    
    primary key (course_id)
);
insert into course (course_name)  values ('java'),('python'),('js');
select * from course;


create table trainer(
     trainer_id int primary key auto_increment,
     trainer_name varchar(50),
     trainer_skills varchar(50),
     trainer_number int 
);
insert into trainer (trainer_name,trainer_skills,trainer_number) values ('lokesh', 'java' , 0988),  ('ragu', 'js' , 4567),  ('keshav', 'python' , 12345);
select* from trainer;


create table enrollment(
     e_id int primary key auto_increment,
     student_id int,
     course_id int,
     trainer_id int,
    
     
     
     foreign key (student_id) references student(student_id),
     foreign key (course_id) references course(course_id),
     foreign key (trainer_id) references trainer(trainer_id)

);

select * from enrollment;	

insert into enrollment (student_id,course_id,trainer_id) values (2,2,2);

select * from  enrollment  as e  inner join  student as s inner join course as c inner join trainer as t on e.student_id = s.student_id and e.course_id = c.course_id and e.trainer_id=t.trainer_id ;