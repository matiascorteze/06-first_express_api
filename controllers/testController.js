class TestController {

  person(req, res) {
    res.send(`Hola! Soy ${req.params.name} y tengo ${req.query.age} años.`)
  }

  byTwo(req, res) {
    res.send((parseInt(req.params.num) * 2).toString())
  }

  checkPalindrome(req, res) {
    const lowStr = req.params.word.toLowerCase()
    const revStr = lowStr.split("").reverse().join("")

    if (lowStr === revStr) {
      res.send(`La frase "${lowStr}" es un palíndromo ya que al revés se lee: "${revStr}".`)
    } else {
      res.send(`La frase "${lowStr}" NO es un palíndromo ya que al revés se lee: "${revStr}".`)
    }
  }

}

module.exports = TestController;