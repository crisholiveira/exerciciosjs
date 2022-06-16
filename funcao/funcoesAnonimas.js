const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // tá chamando a função soma como parâmetro
  console.log(operacao(a, b))

}

imprimirResultado(3, 4) // o terceiro parametro no padrão está a função soma
imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function (x, y) {
  return x - y
})