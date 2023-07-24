CREATE DATABASE INVENTORY;

CREATE TABLE INVENTORY (
    ID int PRIMARY KEY,
    ItemName varchar(255),
    Quantity int,
    Price decimal(10, 2)
);

SELECT * FROM INVENTORY;

INSERT INTO INVENTORY (ID, ItemName, Quantity, Price)
VALUES
  (1, 'Product A', 5, 10.99),
  (2, 'Product B', 8, 15.99),
  (3, 'Product C', 3, 7.99),
  (4, 'Product D', 12, 22.99),
  (5, 'Product E', 2, 9.99),
  (6, 'Product F', 6, 18.99),
  (7, 'Product G', 9, 14.99),
  (8, 'Product H', 4, 11.99),
  (9, 'Product I', 7, 16.99),
  (10, 'Product J', 1, 6.99);

