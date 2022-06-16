const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
  if (x == 5) {
    break // para quando chegar no 5
  }
  console.log(`${x} = ${nums[x]}`)
}


for (let y in nums) {
  if (y == 5) {
    continue // neste caso ele pula o 5 e continua nos demais
  }
  console.log(`${y} = ${nums[y]}`)

}

externo: //rotulo para indicar em qual for o break deve agir, pois por padrão ele age no for interno
for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo
    console.log(`Par = ${a}, ${b}`)
  }
}