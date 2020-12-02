const express = require('express');
const router = express.Router();
const { person, byTwo, checkPalindrome } = require("../modules/functions")

router.get('/name', (req, res, next) => {
  // ingresar de parámetro un nombre, un apellido, y una edad.
  res.send(person("Matias", "Corteze", "31"));
});

router.get('/bytwo', (req, res, next) => {
  // ingresar de parámetro un número
  res.send(byTwo("10"));
});

router.get('/palindrome', (req, res, next) => {
    // ingresar de parámetro una palabra
  res.send(checkPalindrome("arribalabirra"));
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("Holaaa");
});

module.exports = router;
