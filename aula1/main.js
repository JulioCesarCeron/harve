// console.log("Hello World!")

// window.alert("Teste com window alert!!")

// document.getElementsByClassName("content")[0].innerHTML =
//   "Teste com innerHTML!!"

// const 9nome = "Teste"
// const nome9 = "Teste"

// const text = "Mensagem do alert"

// alert(text)

// const textoConsole = "Hello World!"
// let input_do_html = textoConsole

// input_do_html = "input do html"
// console.log(input_do_html)

const date = "25/12/1800"
const city = "polo-norte"

// const bornDatePlace = date + city
// const bornDatePlace = "25/12/1800" + "_" + "polo-norte"
// console.log("bornDatePlace", bornDatePlace)

const description = `${date} ${city}`
console.log("description", description)

// let name = null
// console.log("name", name)

// name = "Teste"
// console.log("name", name)

let count = 0
const server = () => {
  if (count === 0) {
    count++
    return undefined
  } else {
    count++
    return "Com resposta"
  }
}

let resposta1 = server()
console.log("resposta1", resposta1)

let resposta2 = server()
console.log("resposta2", resposta2)

// let count = 10
// console.log("count", count)

// count = "Dez"
// console.log("count", count)

// const teste2 = "Teste2"
// console.log("teste2", teste2)

const valo1 = 10
const texto = "10"

console.log(valo1 + texto)
