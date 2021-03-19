var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();


// see all available carts on the map
router.get('/carts', function (req, res) {
  //let cartInfo = `Select* From Carts where Cart_Availability = 'Y';`;
  let cartInfo = `Select * 
  From Carts`
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
 where Cart_Id= '${req.params.id}' AND Available = 'Y';`;

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


// router.put('/carts/:id', (req, res) => {
//   let connection = mysql.createConnection(dbCreds);
//   connection.connect();
  
//   //updating the cart details information
//   connection.query(`UPDATE Carts SET Cart_Location =?, Cart_Availability=?, Latitude = ?, Longitude =? WHERE Cart_Id = ?`, [req.body.Cart_Location,req.body.Cart_Availability, req.body.Latitude,req.body.Longitude,req.params.id],
//   (error, results) => {
//       if (error) {
//         console.log(error)
//         res.sendStatus(500);
//       }
//       res.status(201).send(results);
//     })

//   connection.end();
// });

  module.exports = router;