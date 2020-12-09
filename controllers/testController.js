const axios = require("axios");

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

  async getPrimePokemons(req, res) {

    const quantity = 150;

    function checkPrime(num) {
      let isPrime = true;
      for (let i = 2; i <= quantity; i++) {
        if (i !== num && num % i == 0) {
          isPrime = false;
        }
      }
      return isPrime;
    }

    const getPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`);
    const pokeArray = await getPokemons.data.results;
    console.log(pokeArray);
    const resultsArr = [];

    pokeArray.map((pokemon, key) => {
      const pokemonID = pokeArray.indexOf(pokemon) + 1;
      if (checkPrime(pokemonID)) {
        resultsArr.push({
          pokemon_ID: pokemonID,
          pokemon_name: pokemon.name,
        });
      }
    });

    res.json(resultsArr);
  }

}

module.exports = TestController;