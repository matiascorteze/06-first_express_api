
// AHREDEPRECADO

function person(name, surname, age) {
  return (`Soy ${name} ${surname} y tengo ${age} años.`)
}

function byTwo(number) {
  return (parseInt(number) * 2).toString()
}

function checkPalindrome(str) {
  const lowStr = str.toLowerCase()
  const revStr = lowStr.split("").reverse().join("")

  if (lowStr === revStr) {
    return (`La frase "${lowStr}" es un palíndromo ya que al revés se lee: "${revStr}".`)
  } else {
    return (`La frase "${lowStr}" NO es un palíndromo ya que al revés se lee: "${revStr}".`)
  }
}

module.exports = { person, byTwo, checkPalindrome }