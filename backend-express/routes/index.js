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

/* GET All Menu items for a specific cart - Vendor/SysAdmin */
router.get('/Menus/:id', function(req, res, next) {
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT Cart_Id, cartmenus.Menu_Id, Menu_Name, Menu_Description, Menu_Price, Available
  FROM cartmenus
  INNER JOIN menu ON cartmenus.Menu_Id = menu.Menu_Id
  WHERE Cart_Id = ?;`, [req.params.id], (error, results) => {
      /* if req.params.id doesn't match a Cart_Id, return 204 http status and a "no cart found msg"? */
      if (results.length === 0) {
        res.send('No such cart', 204);
        /* res.status(204).send(results); */
      } 
      else if (error) {
        res.sendStatus(500);
      } else {

      /*res.send(results, 200); */
      res.status(200).send(results);
      }
    })

  connection.end();
});


module.exports = router;

