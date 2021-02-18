var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //let mySQLQuery = "SELECT * FROM Orders";
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query('SELECT * FROM Orders',(error, results) =>{
    
    if(error){
      res.send(500);
    }
    res.send(results);
  }) 

  connection.end();
});

router.get('/Orders/:id', function(req, res, next) {
  
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT Order_Total,Customer_Id,Order_Date,Order_Status, ordersitems.OrderItem_Id FROM Orders 
  INNER JOIN ordersDetails ON Orders.Order_Id = ordersDetails.Order_Id
  INNER JOIN ordersItems ON ordersdetails.OrderItem_Id = ordersitems.OrderItem_Id
  
  WHERE Cart_Id = ?;`,[req.params.id],  (error, results) =>{
   /*  if (results == undefined){
      res.status(404).send("Order unavailable");
    } */

    if(error){
      res.send(500);
    }
    else {
      res.send(results);
    }
    
  }) 

  connection.end();
});

/* router.post('/', function(req, res, next) {
  let mySQLQuery = `INSERT INTO Customer (Customer_Id, Customer_FirstName) VALUES (${req.body.Customer_Id}, '${req.body.Customer_FirstName}')`;
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(mySQLQuery,(error, results) =>{
    if (error){
        console.log(error)
        res.send(500);
    }
    res.send(results);
  }) 

  connection.end();
}); */

/* router.put('/:id', function(req, res, next) {
  
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  let mySQLQuery = `UPDATE Customer SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
  connection.query(mySQLQuery,(error, results) =>{
    if (error){
        console.log(error)
        res.send(500);
    }
    res.send(results);
  }) 

  connection.end();
}); */

module.exports = router;
