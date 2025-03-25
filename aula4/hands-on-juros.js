const getMontante = (capital, taxaJuros, tempoInvestimento) => {
  const juros = taxaJuros / 100

  const montante = (capital * (1 + juros) ** tempoInvestimento).toFixed(2)
  console.log("montante", montante)
}

getMontante(1000, 1.5, 12)
getMontante(500, 2, 6)
getMontante(1500, 1, 9)
