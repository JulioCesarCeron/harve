const velocidadeMaxima = 50
const multa = 6

const calculoMulta = (valor) => {
  if (valor > velocidadeMaxima) {
    const valorMulta = (valor - velocidadeMaxima) * multa
    console.log(
      `MULTADO! Vc estava a ${valor} km/h e o limite neste trecho é ${velocidadeMaxima} km/h\nVocê deve pagar uma multa no valor de R$ ${valorMulta.toFixed(
        2
      )} pelo limite excedido.`
    )
  } else {
    console.log("Dentro do limite. Tenha uma boa viagem!")
  }
}

calculoMulta(30)
calculoMulta(700)
calculoMulta(60)
calculoMulta(87878783475)
