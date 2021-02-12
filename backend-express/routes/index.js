var express = require('express');
let mysql = require('mysql2');
let dbCreds = require('../../../dbCreds.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query('SELECT * FROM Employees', (error, results, fields) => {
    if (error) {
      res.send(500);
    }
    res.send(results);
  })

  connection.end();
});

module.exports = router;
