CREATE DATABASE IF NOT EXISTS ecommerce;
 
USE ecommerce;
 
CREATE TABLE products (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name AR Products(100),
 price DECIMAL(10,2)
);
 
INSERT INTO products(name, price)
VALUES
('Laptop', 65000),
('Keyboard', 1200),
('Mouse', 800),
('Monitor', 15000);

