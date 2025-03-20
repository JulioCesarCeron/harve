// // Exemplos operatores aritméticos

// const a = 10
// const b = 5

// const soma = a + b
// const subtracao = a - b
// const multiplicacao = a * b
// const divisao = a / b

// const resto = a % b

// console.log(soma, subtracao, multiplicacao, divisao, resto)

// const impar = 137
// const par = 300

// console.log("(137 % 2) o resto de divisão é " + (137 % 2) + " Então é impar")
// console.log("(300 % 2) o resto de divisão é " + (300 % 2) + " Então é par")

// console.log("---------------------")

// // incremento e decremento
// let incremento = 10
// incremento++

// console.log(incremento)

// incremento--
// console.log(incremento)
// // Precedência de operadores
// console.log(((3 + 4) * 8) / (2 - 1))

// //  ano bissexto
// const ano = 1942
// console.log(
//   `O ano ${ano} é bissexto?`,
//   ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
// )

const getDataBase = (item) => {
  const dataBase = {
    1: "João",
    2: "Maria",
    3: "José",
    4: "Ana",
    5: "Pedro",
  }

  return dataBase[item]
}

// // array
const arr = [1, 2, 3, 4, 5]

// map
const arr2 = arr.map((item) => {
  const name = getDataBase(item)
  return name
})

console.log("arr2", arr2)

// pop & push
const lastArrItem = arr.pop()
console.log("lastArrItem", lastArrItem)
console.log("arr", arr)

arr.push(8)
console.log("arr", arr)

console.log("unshift")
const newLength = arr.unshift(53)
console.log("newLength", newLength)
console.log("arr", arr)

// const randomValue = 3
// arr[randomValue] = 200

// exemplo com filter
const novoArr = arr.filter((item) => item !== 3)
console.log("novoArr", novoArr)
