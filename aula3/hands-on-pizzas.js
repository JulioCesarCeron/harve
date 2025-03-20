const pizzas = [
  "bolonhesa",
  "marguerita",
  "Pepperoni",
  "quatro queijos",
  "portuguesa",
  "napolitana",
  "vegetariana",
  "calabresa",
  "frango com catupiry",
  "brócolis com catupiry",
]

const getPizza = () => {
  const sabor = window.prompt("Digite o nome da pizza")
  const hasPizza = pizzas.filter(
    (item) => item.toLowerCase() === sabor.toLowerCase()
  )

  if (hasPizza.length > 0) {
    console.log(`A pizza ${sabor} está no cardápio`)
  } else {
    console.log(`A pizza ${sabor} não está no cardápio`)
  }
}

getPizza()
