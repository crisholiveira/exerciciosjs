// o for in vai percorrer pelos índices. i são os indices [i] são os elementos
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){
  console.log(i, notas[i])
}


const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64
}

for(let atributo in pessoa){ // usar o let assim atributos fica só dentro do escopo do bloco
  console.log(`${atributo} = ${pessoa[atributo]}`)
}