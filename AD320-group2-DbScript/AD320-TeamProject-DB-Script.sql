DROP DATABASE IF EXISTS HotDogCarts;
CREATE DATABASE HotDogCarts;
Use HotDogCarts;


CREATE TABLE Menu (
Menu_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Menu_Name VARCHAR(50) NOT NULL,
Menu_Description VARCHAR(50) NOT NULL,
Menu_Price VARCHAR(50) NOT NULL
);

CREATE INDEX MENUNAME
 ON Menu (Menu_Name);
 
/*Inserting data Queries*/
INSERT INTO Menu
(Menu_Id,Menu_Name,Menu_Description,Menu_Price)
VALUES 
(1, 'OneHotDog', 'VeryTasty',  '$10'),  
(2, 'TwoHotDog', 'Hanson', '4258882626');

CREATE TABLE Customer (
Customer_Id INT(11) PRIMARY KEY AUTO_INCREMENT  NOT NULL,
Customer_FirstName VARCHAR(50) NOT NULL,
Customer_LastName VARCHAR(50) NOT NULL,
Customer_Phone INT(11) NOT NULL,
Customer_Email VARCHAR(50) NOT NULL
);

/*Inserting data Queries*/
INSERT INTO Customer
(Customer_Id,Customer_FirstName,Customer_LastName,Customer_Phone,Customer_Email)
VALUES 
(1, 'Mickey', 'Mouse', '1234567890','mickey@gmail.com'),  
(2, 'Nihal', 'You', '1234588890','niha@gmail.com');

CREATE TABLE Employees (
Employee_Id INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
Employee_FirstName VARCHAR(50) NOT NULL,
Employee_LastName VARCHAR(50) NOT NULL,
EmployeeRole Enum('Vendor','SysAdmin') NOT NULL
);

/*Inserting data Queries*/
INSERT INTO Employees
(Employee_Id,Employee_FirstName,Employee_LastName,EmployeeRole)
VALUES 
(1, 'Romeo', 'Kalis', 'SysAdmin'),  
(2, 'Nihal', 'You', 'Vendor');

CREATE TABLE Carts (
Cart_Id INT(11) PRIMARY KEY  NOT NULL,
Cart_Name  VARCHAR(50) NOT NULL,
Cart_Location  VARCHAR(50) NOT NULL,
Cart_Availability ENUM('Y','N') NOT NULL,
Employee_Id INT(11) NOT NULL,
  CONSTRAINT Carts_Employee_Id_fk FOREIGN KEY (Employee_Id)
        REFERENCES Employees (Employee_Id)
        );

/*Inserting data Queries*/
INSERT INTO Carts
(Cart_Id,Cart_Name,Cart_Location,Cart_Availability,Employee_Id)
VALUES 
(1, 'Cart1', 'Downtown,Seattle','Y','1'),  
(2, 'Cart2', 'MLT,Seattle', 'Y','2');
        
CREATE TABLE CartMenus (
CartMenus_Id INT(11) PRIMARY KEY  NOT NULL,
Available ENUM('Y','N') NOT NULL,
Menu_Id INT(11) NOT NULL,
Cart_Id INT(11) NOT NULL,
CONSTRAINT CartM_Menu_Id_fk FOREIGN KEY (Menu_Id)
        REFERENCES Menu (Menu_Id),
CONSTRAINT CartM_Cart_Id_fk FOREIGN KEY (Cart_Id)
        REFERENCES Carts (Cart_Id)
        ); 
/*Inserting data Queries*/
INSERT INTO CartMenus
(CartMenus_Id,Available,Menu_Id,Cart_Id)
VALUES 
(1, 'Y','1','1'),  
(2, 'N', '2','2');    
        
        
CREATE TABLE Orders (
Order_Id INT(11) PRIMARY KEY  NOT NULL,
Order_Total VARCHAR(50) NOT NULL,
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
(Order_Id,Order_Total,Customer_Id,Order_Date,Order_Status,Cart_Id)
VALUES 
(1, '$10','1','2021-01-01','Inprogress','1'),  
(2, '$11','2','2021-02-01','Done','2');  

CREATE TABLE OrdersItems (
OrderItem_Id INT(11) PRIMARY KEY  NOT NULL,
Quantity INT(11) NOT NULL,
Menu_Id INT(11)  NOT NULL,
     CONSTRAINT OrdIt_Menu_Id_fk FOREIGN KEY (Menu_Id)
        REFERENCES Menu (Menu_Id)
);

/*Inserting data Queries*/
INSERT INTO OrdersItems
(OrderItem_Id,Quantity,Menu_Id)
VALUES 
(1, '1','1'),  
(2, '2','2');

CREATE TABLE OrdersDetails (
Detail_Id INT(11) PRIMARY KEY  NOT NULL,
Order_Id INT(11)  NOT NULL,
OrderItem_Id  INT(11) NOT NULL,
  CONSTRAINT OrdDe_Order_Id_fk FOREIGN KEY (Order_Id )
        REFERENCES Orders (Order_Id ),
            CONSTRAINT OrdDe_OrderItem_Id_fk FOREIGN KEY (OrderItem_Id)
        REFERENCES OrdersItems (OrderItem_Id)
);

/*Inserting data Queries*/
INSERT INTO OrdersDetails
(Detail_Id,Order_Id,OrderItem_Id)
VALUES 
(1, '1','1'),  
(2, '2','2');



CREATE TABLE PaymentType (
PaymentType_Id INT(11) PRIMARY KEY  NOT NULL,
Payment_Type ENUM('Visa','Mastercard','Amex','Discover','Cash') NOT NULL
);

/*Inserting data Queries*/
INSERT INTO PaymentType
(PaymentType_Id,Payment_Type)
VALUES 
(1, 'Visa'),  
(2, 'Mastercard');
        
CREATE TABLE Invoices (
Invoice_Id INT(11) PRIMARY KEY  NOT NULL,
Order_Id INT(11) NOT NULL,
PaymentType_Id INT(11) NOT NULL,
  CONSTRAINT Invo_Order_Id_fk FOREIGN KEY (Order_Id)
        REFERENCES Orders (Order_Id),
         CONSTRAINT Invo_PaymentType_Id_fk FOREIGN KEY (PaymentType_Id)
        REFERENCES  PaymentType(PaymentType_Id)
        );
/*Inserting data Queries*/
INSERT INTO Invoices
(Invoice_Id,Order_Id,PaymentType_Id)
VALUES 
(1,1,1),  
(2,2,2); 

/* Sample queries to test the data*/ 

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
        
 



        


