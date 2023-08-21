-- create table basket_a (
-- 	a int primary key,
-- 	fruit_a varchar(100) not null
-- )
-- create table basket_b (
-- 	b int primary key,
-- 	fruit_b varchar(100) not null
-- )

-- insert into basket_b (a, fruit_b)
-- values
-- (1,'Orange'),
-- (2,'Apple'),
-- (3,'Watermelon'),
-- (4,'Pear')
select * from basket_a
select * from basket_b

select
	basket_a.a,
	basket_a.fruit_a,
	basket_b.b,
	basket_b.fruit_b
from basket_a
	inner join basket_b
	on basket_a.fruit_a = basket_b.fruit_b
	
select
	basket_a.a,
	basket_a.fruit_a,
	basket_b.b,
	basket_b.fruit_b
from basket_a
	full join basket_b
	on basket_a.fruit_a = basket_b.fruit_b
--left join/right join/ full join

----------------------------------------------
-- CREATE TABLE cities(
-- 	city_id serial primary key,
-- 	city_name varchar(50),
-- 	country_id integer
-- )

-- CREATE TABLE countries(
-- 	country_id serial primary key,
-- 	country_name varchar(50)
-- )

insert into cities(city_name, country_id)
Values
('Tel Aviv', 1),
('Jerusalem', 1),
('Haifa', 1),
('Paris', 2),
('Lyon', 2),
('Marseille', 2),
('Berlin', 3),
('Hamburg', 3),
('Munich', 3)

select * from countries
select * from cities

SELECT b.city_name, a.country_name
FROM countries a, cities b,
WHERE a.country_id=b.country_id

SELECT customer.first_name, customer.last_name,(address,city_id) FROM customer, address
WHERE 


SELECT customer.first_name, 
	   customer.last_name,
	   address.address,
	   address.district,
	   city.city,
	   country.country
from customer
inner join address
	on customer.address_id= address.address_id
inner join city
	on address.city_id = city.city_id
inner join country
	on city.country_id = country.country_id
	
INSERT into cities(cities_name, country_id)
('New York', 4),
('Miami', 4),
('Los Angeles', 4)

