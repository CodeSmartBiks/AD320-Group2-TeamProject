const e = require('express');
var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* VENDOR - default path response */
router.get('/', function (req, res, next) {
  res.send('please include cart number.');
});



/* VENDOR - API GET path for seeing current orders (InProgress or Done) for a single cart */
/*  Added the Order_Status to the WHERE conditional, and included a 
    req.query.Order_Status=? to the sql statement, and included
    req.query.Order_Status to the array of conditional statements.

    Fetch URL provides the req.query to determine if the GET api
    is looking for "InProgress" orders or "Done" orders.                */

router.get('/orders/cart/:id', function (req, res, next) {

  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT Cart_Id,SUM(Menu_Price * Quantity) AS "Total",Customer_FirstName,Order_Date,Order_Status,orders.Order_Id, group_concat(concat(Menu_Name, '(', Quantity, ') - ', Menu_Price, ' ea')separator', ') as "items" FROM Orders 
  INNER JOIN ordersDetails ON Orders.Order_Id = ordersDetails.Order_Id
  INNER JOIN ordersItems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
  INNER JOIN menu ON menu.Menu_Id = ordersitems.Menu_Id
  INNER JOIN customer ON customer.Customer_Id = orders.Customer_Id
  WHERE Cart_Id = ? AND Order_Status= ?
  group by Customer_FirstName, Order_Date, Order_Status, orders.Order_Id;`, [req.params.id, req.query.Order_Status], (error, results) => {

    if (error) {
      res.send(500);
      console.log(req.query.Order_Status);
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
router.get('/orders/order/:id', function (req, res, next) {

  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT DISTINCT orders.Order_Id,SUM(Menu_Price * Quantity) AS "Total",Customer_FirstName,Order_Date,Order_Status, Cart_Id, group_concat(concat(Menu_Name, '(', Quantity, ') - ', Menu_Price, ' ea')SEPARATOR', ') as "items" FROM orders 
    INNER JOIN ordersdetails ON orders.Order_Id = ordersdetails.Order_Id
    INNER JOIN ordersitems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
    INNER JOIN menu ON menu.Menu_Id = ordersitems.Menu_Id 
    INNER JOIN customer ON customer.Customer_Id = orders.Customer_Id
    WHERE orders.Order_Id = ?;`, [req.params.id], (error, results) => {

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

//Issue 33 PUT endpoint to update cart availability
router.put('/carts/:id', (req, res) => {
  let connection = mysql.createConnection(dbCreds);
  connection.connect();
  
  //updating the cart details information
  connection.query(`UPDATE Carts SET Cart_Location =?, Cart_Availability=?, Latitude =?, Longitude =? 
   WHERE Cart_Id = ?`, [req.body.Cart_Location,req.body.Cart_Availability, req.body.Latitude,req.body.Longitude,req.params.id],
 (error, results) => {
      if (error) {
        console.log(error)
        res.send(500);
      }
      res.status(201).send(results);
    })

  connection.end();
});

module.exports = router;