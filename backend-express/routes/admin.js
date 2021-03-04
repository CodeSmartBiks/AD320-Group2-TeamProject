var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* ADMIN - see all the menu details from the menu table */
router.get('/menu', function (req, res, next) {
    let connection = mysql.createConnection(dbCreds);
    connection.connect();
  
    connection.query('SELECT * FROM Menu', (error, results, fields) => {
      if (error) {
        res.send(500);
      }
      res.status(200).send(results);
    })
  
    connection.end();
  });

  /* VENDOR/ADMIN - GET all Menu items for a specific cart */
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

  /* ADMIN - this function/call outputs all the customer details from customer table*/
router.get('/customers', function (req, res, next) {
    let connection = mysql.createConnection(dbCreds);
    connection.connect();
  
    connection.query('SELECT * FROM Customer', (error, results, fields) => {
      if (error) {
        res.send(500);
      }
      res.status(200).send(results);
    })
  
    connection.end();
  });


  module.exports = router;