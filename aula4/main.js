const getIMC = (peso, altura) => {
  return peso / altura ** 2
}

console.log("chamada 1", getIMC(70, 1.72).toFixed(2))
console.log("chamada 2", getIMC(60, 1.52).toFixed(2))
console.log("chamada 3", getIMC(90, 1.92).toFixed(2))
