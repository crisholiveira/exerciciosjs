function criarProduto(nome, preco){
  return {
    nome,
    preco,
    desconto : 0.1
  }

}

console.log(criarProduto("Notebbok", 2199.49))