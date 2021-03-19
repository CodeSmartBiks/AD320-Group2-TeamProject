var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

// see all available carts on the map
router.get('/map', function (req, res) {
  //let cartInfo = `Select* From Carts where Cart_Availability = 'Y';`;
  let cartInfo = `Select carts.Cart_Id,Cart_Name,Cart_Location,Latitude, Longitude, group_CONCAT(concat(Menu_Name) separator', ') AS "Items" 
  From Carts
  Inner join cartmenus on carts.Cart_Id = cartmenus.cart_id
  Inner join menu on cartmenus.menu_id = menu.menu_id  
  where carts.Cart_Availability = 1 AND cartmenus.available = 'Y'
  group by carts.Cart_Id,Cart_Name, Cart_Location, Latitude, Longitude;`
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(cartInfo, (error, results) => {

    if(error){
      res.send(500);
    }
    else {
      res.send(results);
    }
})
connection.end();
});

//CUSTOMER - get full cart details when customer selects a cart (from summary modal)
router.get('/cart/:id', function (req, res, next) {

  let getCartDetails = `SELECT Cart_Id,Menu_Id,Employee_FirstName,Cart_Location,Latitude,longitude,Menu_Name,Menu_Description,Menu_Price FROM employees e JOIN carts c
  USING(Employee_id )
  JOIN cartmenus cm
  USING(Cart_Id)
  JOIN menu m
  USING(Menu_Id)
 where Cart_Id= '${req.params.id}' AND Available = 1;`;


  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(getCartDetails, (error, results) => {

    if(error){
      res.send(500);
    }
    else {
      res.send(results);
    }
    
  }) 

  connection.end();
});



// CUSTOMER - Info summary for modal for selected cart on map
router.get('/map/:id', function(req, res, next) {
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(`SELECT c.Cart_Id, c.Cart_Name, c.Cart_Location, m.Menu_Name
    FROM carts c
    JOIN cartmenus cm ON c.Cart_Id = cm.Cart_Id
    JOIN menu m ON m.Menu_Id = cm.Menu_Id
    WHERE Available = 1 AND c.Cart_Id = '${req.params.id}';`,[req.params.id], (error, results) => {
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
});

/* CUSTOMER - API PUT path for adding an order to the database for a cart */
router.put('/newOrder/cart/:id', function (req, res) {
  let queries = 
      `CALL addNewOrder(?, ?, ?, ?, ${req.params.id}); `;
      
  let connection = mysql.createConnection(dbCreds);
  connection.connect();

  connection.query(queries, [req.body.Quantity, req.body.Menu_Name, req.body.Order_Total, req.body.Customer_Id, req.params.id], (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      else {
        res.status(201).send(results);
        console.log(results[0]);
        console.log(results[1]);
      }
    })
    connection.end();
});





module.exports = router;
