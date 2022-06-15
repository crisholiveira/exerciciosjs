const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()
//var não tem escopo de função, por isso vai sempre retiornar 10. Já o let tem escopo de função, por isso vai imprimir o valor 2 e 8
const funcs1 = []
for (let j = 0; j < 10; j++) {
  funcs1.push(function () {
    console.log(j)
  })

}

funcs1[2]()
funcs1[8]()

