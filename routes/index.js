const express = require('express');
const router = express.Router();
const TestController = require("../controllers/testController");

const ContInstance = new TestController();

router.get('/name/:name', (req, res, next) => {
  ContInstance.person(req, res)
});

router.get('/bytwo/:num', (req, res, next) => {
  ContInstance.byTwo(req, res);
});

router.get('/palindrome/:word', (req, res, next) => {
  ContInstance.checkPalindrome(req, res);
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("Express test API with dynamic routes and controllers.");
});

module.exports = router;
