var express = require('express');
let mysql = require('mysql2');
let dbCreds = require('../../../dbCreds.json');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
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

//get all the cart details when customer makes a get call
router.get('/:id', function (req, res, next) {

  let getCartDetails = `SELECT Cart_Id,Menu_Id,Employee_FirstName,Cart_Location,Menu_Name,Menu_Description,Menu_Price FROM employees e JOIN carts c
  USING(Employee_id )
  JOIN cartmenus cm
  USING(Cart_Id)
  JOIN menu m
  USING(Menu_Id)
 where Cart_Id= '${req.params.id}';`;

  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(getCartDetails, (error, results) => {
    if (error) {
      res.send(500);
    } else {
      res.send(results);
    }

  })
  connection.end();
});

module.exports = router;

