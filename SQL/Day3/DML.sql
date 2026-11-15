create database Product_Management;
use  Product_Management;
create table product_details(
       product_ID int  auto_increment primary key,
       product_name varchar(50),
       price int,
       stock varchar(20),
       manufacture_date datetime default(now())
       

);
select * from product_details;


alter table product_details rename column  stock to  stock_available;

insert into product_details (product_name,price,stock_available) values ("Laptop",55000,"Available");
insert into product_details  (product_name,price,stock_available) values ("mouse",500,"Available"),("monitor", 12000, "Available"),("mobile Phone", 30000, "out of stock");

update product_details set price = 45000 where product_ID = 1;

delete from product_details where product_ID = 2;
truncate table  product_details;

drop table product_details;