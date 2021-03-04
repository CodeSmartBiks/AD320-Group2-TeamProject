var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* ADMIN - this function/call outputs all the menu details from the menu table */
router.get('/admin/Menu', function (req, res, next) {
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