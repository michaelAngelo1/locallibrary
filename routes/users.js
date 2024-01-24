const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: "List of users"});
});

module.exports = router;
