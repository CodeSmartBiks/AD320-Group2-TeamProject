var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();



/* VENDOR - API GET path for seeing all current order for a single cart */
router.get('/Orders/:id', function (req, res, next) {

  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT Orders.Order_Id,Order_Total,Customer_Id,Order_Date,Order_Status, Cart_Id, ordersitems.OrderItem_Id, Menu_Name, Menu_Price, Quantity FROM Orders 
  
  INNER JOIN ordersDetails ON Orders.Order_Id = ordersDetails.Order_Id
  INNER JOIN ordersItems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
  INNER JOIN menu ON menu.Menu_Id = ordersitems.Menu_Id  
  
  WHERE Cart_Id = ?;`, [req.params.id], (error, results) => {
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