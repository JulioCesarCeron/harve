const name = "Abner silva"

console.log(name)
console.log(name.charAt(3))
console.log(name.at(-3))
console.log(name[3])

const newName = name.replace(" ", "-")
console.log("newName", newName)

console.log(name.replace(/a/gi, "*"))
console.log("---------")
console.log(name.replaceAll(/a/gi, "*"))

console.log("---------2")
const message = "      mensagem1       "
console.log("message", message)
console.log("message sem espaço", message.trim())
