//funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo parametro vai ser undefined

//função com retorno
function soma(a, b = 0) {
  return a + b
}

console.log(soma(10, 3))
console.log(soma(3))
