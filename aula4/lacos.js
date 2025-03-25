// for (let index = 0; index <= 10; index++) {
//   console.log(index)
// }

// let count = 10
// while (count < 10) {
//   console.log(count)
//   count++
// }
// let idSetInterval

// idSetInterval = setInterval(() => {
//   console.log("2 segundos")
// if (achoutBotao) {
//   clearInterval(idSetInterval)
// }
// }, 2000)

// let timeOut
// timeOut = setTimeout(() => {
//   clearTimeout(idSetInterval)
// }, 2000)

// let value = 10

// do {
//   console.log(value)
//   value++
// } while (value < 10)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.forEach((value, index) => {
//   console.log(value, index)
// })

// for (const value of array) {
//   console.log(value)
// }

// let brindes = ["cerveja", "pizza", "entrega grátis"]
// for (let i = 0; i < brindes.length; i++) {
//   if (brindes[i].length > 5) {
//     console.log("Tem mais que 5 caracteres")
//   }
// }

let array = []
let somaAleatorio = 0

for (let index = 0; index < 10; index++) {
  const numeroAleatorio = Math.floor(Math.random() * 10)
  somaAleatorio += numeroAleatorio
  array.push(numeroAleatorio)
}

console.log("array", array)
console.log("somaAleatorio", somaAleatorio)
