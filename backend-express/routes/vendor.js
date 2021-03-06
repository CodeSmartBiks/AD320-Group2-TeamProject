var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* VENDOR - default path response */
router.get('/', function(req, res, next) {
    res.send('please include cart number.');
  });



/* VENDOR - API GET path for seeing all current orders for a single cart */
/* ** MAY NEED TO ADD "DONE" VS. "IN PROGRESS" TO WHERE FILTER!  ** 
   ** adjust api path to be /orders/done/:id and /orders/inc/:id **
   ** for vendors, but duplicate this route for an admin view?   **
   ** Will also need to add more sample data for orders to DB of **
   ** multiple done, in progress for each cart.                  ** */
router.get('/orders/cart/:id', function (req, res, next) {

  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT Cart_Id,SUM(Menu_Price * Quantity) AS "Total",Customer_FirstName,Order_Date,Order_Status,orders.Order_Id, group_concat(concat(Menu_Name, '(', Quantity, ') - ', Menu_Price, ' ea')separator', ') as "items" FROM Orders 
  INNER JOIN ordersDetails ON Orders.Order_Id = ordersDetails.Order_Id
  INNER JOIN ordersItems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
  INNER JOIN menu ON menu.Menu_Id = ordersitems.Menu_Id
  INNER JOIN customer ON customer.Customer_Id = orders.Customer_Id
  WHERE Cart_Id = ? AND Order_Status = "InProgress"
  group by Customer_FirstName, Order_Date, Order_Status, orders.Order_Id;`, [req.params.id], (error, results) => {
    /*  if (results == undefined){
       res.status(404).send("Order unavailable");
     } */

    if (error) {
      res.send(500);
    }
    else if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).send(results);
    }

  })

  connection.end();
});

/* VENDOR - Retrieve all details for a specific order */
router.get('/orders/order/:id', function(req, res, next) {
  
    let connection = mysql.createConnection(dbCreds);
    connection.connect();
  
    connection.query(`SELECT DISTINCT orders.Order_Id,SUM(Menu_Price * Quantity) AS "Total",Customer_FirstName,Order_Date,Order_Status, Cart_Id, group_concat(concat(Menu_Name, '(', Quantity, ') - ', Menu_Price, ' ea')SEPARATOR', ') as "items" FROM orders 
    INNER JOIN ordersdetails ON orders.Order_Id = ordersdetails.Order_Id
    INNER JOIN ordersitems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
    INNER JOIN menu ON menu.Menu_Id = ordersitems.Menu_Id 
    INNER JOIN customer ON customer.Customer_Id = orders.Customer_Id
    WHERE orders.Order_Id = ?;`,[req.params.id],  (error, results) =>{
  
      if (results.length === 0) {
        res.status(404).send("Order Not Found");
      }
      else if (error) {
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    })
    connection.end();
  });

/* VENDOR/ADMIN - GET all Menu items for a specific cart */
/* this is also on the admin.js */
router.get('/menus/cart/:id', function (req, res, next) {
    let connection = mysql.createConnection(dbCreds);
    connection.connect();
  
    connection.query(`SELECT Cart_Id, cartmenus.Menu_Id, Menu_Name, Menu_Description, Menu_Price, Available
    FROM cartmenus
    INNER JOIN menu ON cartmenus.Menu_Id = menu.Menu_Id
    WHERE Cart_Id = ?;`, [req.params.id], (error, results) => {
      /* if req.params.id doesn't match a Cart_Id, return 404 http status and a "cart not found" msg */
      if (results.length === 0) {
  
        res.status(404).send("Cart Not Found");

      }
      else if (error) {
        res.sendStatus(500);
      } else {
  
        res.status(200).send(results);
      }
    })

    connection.end();
  
  });


module.exports = router;