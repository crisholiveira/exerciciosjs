//armazenando uma função anônima em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b
}
console.log(soma(3, 5))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 4))

