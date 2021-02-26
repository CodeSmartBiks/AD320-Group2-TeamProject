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

      /* I Can't get it to display the below message if it's already successfully displayed cart info
          UPDATE--apparently 204 won't update the results displayed. 404 actually fixes the issue as desired */
        res.status(404).send("Cart Not Found");
        /* res.status(204).send('Cart Not Found'); */
      } 
      else if (error) {
        res.sendStatus(500);
      } else {

      /*res.send(results, 200); */
      res.status(200).send(results);
      }
    })
/* test comment */
  connection.end();

});

module.exports = router;

//get all the cart details when customer makes a get call - Customer
router.get('/:id', function (req, res, next) {

  let getCartDetails = `SELECT Cart_Id,Menu_Id,Employee_FirstName,Cart_Location,Menu_Name,Menu_Description,Menu_Price FROM employees e JOIN carts c
  USING(Employee_id )
  JOIN cartmenus cm
  USING(Cart_Id)
  JOIN menu m
  USING(Menu_Id)
 where Cart_Id= '${req.params.id}' AND Available = 'Y';`;

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



// API GET path for seeing all current order for a single cart - Vendor
router.get('/Orders/:id', function(req, res, next) {
  
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT orders.Order_Id,Order_Total,Customer_Id,Order_Date,Order_Status, ordersitems.OrderItem_Id FROM Orders 
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

router.get('/map/:id', function(req, res, next) {
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT c.Cart_Id, c.Cart_Name, c.Cart_Location, m.Menu_Name
    FROM carts c
    JOIN cartmenus cm ON c.Cart_Id = cm.Cart_Id
    JOIN menu m ON m.Menu_Id = cm.Menu_Id
    WHERE Available = 'Y' AND c.Cart_Id = '${req.params.id}';`,[req.params.id], (error, results) => {
      /* if req.params.id doesn't match a Cart_Id, return 204 http status and a "no cart found msg"? */
      if (results.length === 0) {
        res.status(404).send("Cart Not Found");
          /* res.status(204).send('Cart Not Found'); */
      } 
      else if (error) {
        res.sendStatus(500);
      }
      else {  
        /*res.send(results, 200); */
        res.status(200).send(results);
      }
    })
  /* test comment */
    connection.end();
})

module.exports = router;