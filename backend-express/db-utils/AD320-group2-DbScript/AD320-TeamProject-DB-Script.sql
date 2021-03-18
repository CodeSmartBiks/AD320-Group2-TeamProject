Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@ZenSorcere 
CodeSmartBiks
/
AD320-Group2-TeamProject
3
10
Code
Issues
66
Pull requests
2
Actions
Projects
Wiki
Security
Insights
AD320-Group2-TeamProject/backend-express/db-utils/AD320-group2-DbScript/AD320-TeamProject-DB-Script.sql
@ZenSorcere
ZenSorcere updated db script
Latest commit e738629 10 hours ago
 History
 3 contributors
@ZenSorcere@crystalbroderick@CodeSmartBiks
274 lines (244 sloc)  6.94 KB
  
DROP DATABASE IF EXISTS HotDogCarts;
CREATE DATABASE HotDogCarts;
Use HotDogCarts;


CREATE TABLE Menu (
Menu_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Menu_Name VARCHAR(50) NOT NULL,
Menu_Description VARCHAR(150) NOT NULL,
Menu_Price DECIMAL(4, 2) NOT NULL
);

CREATE INDEX MENUNAME
 ON Menu (Menu_Name);
 
/*Inserting data Queries*/
INSERT INTO Menu
(Menu_Name,Menu_Description,Menu_Price)
VALUES 
('OneHotDog', 'VeryTasty',  '7.99'),  
('TwoHotDog', 'Hanson', '9.99'),
('SeattleDog', 'All Beef Frank with Cream Cheese', '5.99'),
('Chicago Dog', 'All Beef dog w/ mustard, sweet green pickle relish, onion, tomato wedges, pickle spear, sport peppers, and celery salt.', '9.99'),
('Coke', '12oz. can of Coke', '1.99');

CREATE TABLE Customer (
Customer_Id INT(11) PRIMARY KEY AUTO_INCREMENT  NOT NULL,
Customer_FirstName VARCHAR(50) NOT NULL,
Customer_LastName VARCHAR(50) NOT NULL,
Customer_Phone INT(11) NOT NULL,
Customer_Email VARCHAR(50) NOT NULL
);

/*Inserting data Queries*/
INSERT INTO Customer
(Customer_FirstName,Customer_LastName,Customer_Phone,Customer_Email)
VALUES 
('Mickey', 'Mouse', '1234567890','mickey@gmail.com'),  
('Nihal', 'You', '1234588890','niha@gmail.com');

CREATE TABLE Employees (
Employee_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Employee_FirstName VARCHAR(50) NOT NULL,
Employee_LastName VARCHAR(50) NOT NULL,
EmployeeRole Enum('Vendor','SysAdmin') NOT NULL
);

/*Inserting data Queries*/
INSERT INTO Employees
(Employee_FirstName,Employee_LastName,EmployeeRole)
VALUES 
('Romeo', 'Kalis', 'SysAdmin'),  
('Nihal', 'You', 'Vendor'),
('Oscar', 'Meyer', 'Vendor'),
('Alton', 'Brown', 'Vendor'),
('Takeru', 'Kobayashi', 'Vendor');

CREATE TABLE Carts (
Cart_Id INT(11) PRIMARY KEY  NOT NULL AUTO_INCREMENT,
Cart_Name  VARCHAR(50) NOT NULL,
Cart_Location  VARCHAR(50) NOT NULL,
Cart_Availability TINYINT NOT NULL,
Latitude DECIMAL(17,14) NOT NULL,
Longitude DECIMAL(17,14) NOT NULL,
Employee_Id INT(11) NOT NULL,
  CONSTRAINT Carts_Employee_Id_fk FOREIGN KEY (Employee_Id)
        REFERENCES Employees (Employee_Id)
        );

/*Inserting data Queries*/
INSERT INTO Carts
(Cart_Name,Cart_Location,Cart_Availability,Latitude,Longitude,Employee_Id)
VALUES 
('Cart1','2nd & Cherry',1,'47.60360050566099','-122.33390229782778','2'),  
('Cart2','GasWorks Park', 1,'47.64642825417244','-122.33409669417094','3'),
('Cart3','3rd & Pine', 1,'47.61087191309346','-122.33868384163716', '4'),
('GreenCart','Greenlake Bathhouse',1,'47.68241873619547','-122.33982840401887','5');
        
CREATE TABLE CartMenus (
CartMenus_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Available TINYINT NOT NULL,
Menu_Id INT(11) NOT NULL,
Cart_Id INT(11) NOT NULL,
CONSTRAINT CartM_Menu_Id_fk FOREIGN KEY (Menu_Id)
        REFERENCES Menu (Menu_Id),
CONSTRAINT CartM_Cart_Id_fk FOREIGN KEY (Cart_Id)
        REFERENCES Carts (Cart_Id)
        ); 
/*Inserting data Queries*/
INSERT INTO CartMenus
(Available,Menu_Id,Cart_Id)
VALUES 
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 4, 1),
(1, 5, 1),
(0, 1, 2),
(1, 2, 2),
(0, 3, 2),
(0, 4, 2),
(0, 5, 2),
(1, 1, 3),
(0, 2, 3),
(0, 3, 3),
(0, 4, 3),
(1, 5, 3),
(0, 1, 4),
(0, 2, 4),
(0, 3, 4),
(1, 4, 4),
(1, 5, 4);    
        
        
CREATE TABLE Orders (
Order_Id INT(11) PRIMARY KEY  AUTO_INCREMENT NOT NULL,
Order_Total DECIMAL(10, 2) NOT NULL,
Customer_Id INT(11) NOT NULL,
Order_Date DATETIME NOT NULL,
Order_Status ENUM('InProgress','Done') NOT NULL,
Cart_Id INT(11) NOT NULL,
  CONSTRAINT Ord_Customer_Id_fk FOREIGN KEY (Customer_Id)
        REFERENCES Customer (Customer_Id),
          CONSTRAINT Ord_Cart_Id_fk FOREIGN KEY (Cart_Id)
        REFERENCES Carts (Cart_Id)
);

/*Inserting data Queries*/
INSERT INTO Orders
(Order_Total,Customer_Id,Order_Date,Order_Status,Cart_Id)
VALUES 
('10.00',1,'2021-01-01','Inprogress', 1),  
('11.00',2,'2021-02-01','Done',2), 
('15.00', 2, '2021-02-13', 'Inprogress', 3),
('25.00', 1, '2021-02-12', 'Done', 4),
('20.00', 1, '2021-02-12', 'Done', 3); 

CREATE TABLE OrdersItems (
OrderItem_Id INT(11) PRIMARY KEY  AUTO_INCREMENT NOT NULL,
Quantity INT(11) NOT NULL,
Menu_Id INT(11)  NOT NULL,
     CONSTRAINT OrdIt_Menu_Id_fk FOREIGN KEY (Menu_Id)
        REFERENCES Menu (Menu_Id)
);

/*Inserting data Queries*/
INSERT INTO OrdersItems
(Quantity,Menu_Id)
VALUES 
('1','1'),
('2', '1'),
('3','1'),
('1','2'),
('2', '2'),
('3','2'),
('1','3'),
('2', '3'),
('3','3'),
('1','4'),
('2', '4'),
('3','4'),
('1','5'),
('2', '5'),
('3','5');

CREATE TABLE OrdersDetails (
Detail_Id INT(11) PRIMARY KEY  AUTO_INCREMENT NOT NULL,
Order_Id INT(11)  NOT NULL,
OrderItem_Id  INT(11) NOT NULL,
  CONSTRAINT OrdDe_Order_Id_fk FOREIGN KEY (Order_Id )
        REFERENCES Orders (Order_Id ),
            CONSTRAINT OrdDe_OrderItem_Id_fk FOREIGN KEY (OrderItem_Id)
        REFERENCES OrdersItems (OrderItem_Id)
);

/*Inserting data Queries*/
INSERT INTO OrdersDetails
(Order_Id,OrderItem_Id)
VALUES 
(1, 1),  
(2, 2),
(3, 12),
(3, 15),
(4, 4),
(4, 7),
(5, 5),
(5, 13);



CREATE TABLE PaymentType (
PaymentType_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Payment_Type ENUM('Visa','Mastercard','Amex','Discover','Cash') NOT NULL
);

/*Inserting data Queries*/
INSERT INTO PaymentType
(Payment_Type)
VALUES 
('Visa'),  
('Mastercard'),
('Amex'),
('Discover'),
('Cash');
        
CREATE TABLE Invoices (
Invoice_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Order_Id INT(11) NOT NULL,
PaymentType_Id INT(11) NOT NULL,
  CONSTRAINT Invo_Order_Id_fk FOREIGN KEY (Order_Id)
        REFERENCES Orders (Order_Id),
         CONSTRAINT Invo_PaymentType_Id_fk FOREIGN KEY (PaymentType_Id)
        REFERENCES  PaymentType(PaymentType_Id)
        );
/*Inserting data Queries*/
INSERT INTO Invoices
(Order_Id,PaymentType_Id)
VALUES 
(1,1),  
(2,2); 


-- -----------------------------------------------------
-- procedure addNewOrder
-- -----------------------------------------------------

USE `hotdogcarts`;
DROP procedure IF EXISTS `hotdogcarts`.`addNewOrder`;

DELIMITER $$
USE `hotdogcarts`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addNewOrder`(
Quantity int(11), Menu_Name varchar(50),Order_Total DECIMAL(10,2), Customer_Id int(11), Cart_Id int(11))
BEGIN
DECLARE numberO INT;
      select ordersitems.OrderItem_Id into numberO from ordersitems
            inner join menu ON
            ordersitems.Menu_Id = menu.Menu_Id
            where ordersitems.Quantity = Quantity AND menu.Menu_Name = Menu_Name;
	INSERT INTO Orders
      (Order_Total, Customer_Id, Order_Date, Order_Status, Cart_id)
      VALUES
      ( 
        Order_Total,
        Customer_Id, 
        now(),
        'InProgress',
        Cart_Id
      ); 
        INSERT INTO OrdersDetails
        (Order_Id, OrderItem_Id)
        VALUES
        ( 
          LAST_INSERT_ID(),
          numberO
        );
END$$

DELIMITER ;

/* Sample queries to test the data*/ 
/*
Select* From Menu;
Select* From Customer;
Select* From Employees;
Select* From Carts;
Select* From CartMenus;
Select* From Orders;
Select* From OrdersItems;
Select* From OrdersDetails;
Select* From PaymentType;
Select* From Invoices;
*/

