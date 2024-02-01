/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// router.get('/', (req, res) => {
//   res.render('users');
// });

router.get('/', (req, res) => {
  res.render('index');
});

// ORDER HISTORY
router.get('/orders/:userID', (req, res) => {
  //  Check if the user is logged in
  //  Populate from SQL orders for userID
  res.render('orders');
});

// VIEW CART
router.get('/orders/:orderID', (req, res) => {
  // Check if the user is logged in
  // Populate currentOrder object from cookie data
  //
  res.render('cart', currentOrder);
});

// USER LOGIN
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

router.post('/order/:orderID', (req, res) => {
  // create sql statement to add order to orders table
  // make api request to send notification to restaurant
  res.redirect('orders/:userID');
});

router.post('/orders/:orderID/timeToComplete', (req, res) => {
  // create sql statement for owner to add/update time_to_complete to orders table.
  // send sms to client to notify their order is being prepared
  // start a timer that sends an sms to the client when completed
  res.redirect('orders/:userID');
});

module.exports = router;
