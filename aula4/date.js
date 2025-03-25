// const date = "16/05/2021"
// const arrDate = date.split("/")

// const message = `dia ${arrDate[0]} de ${arrDate[1]} de ${arrDate[2]}`
// console.log("message", message)

// const date = new Date()
// console.log("date", date)

// const birthday = new Date("1990-05-16 01:00:00")
// console.log("birthday", birthday)

// const birthday2 = new Date(1990, 5, 18)
// console.log("birthday2", birthday2.getTime())
// console.log("birthday2", birthday2)

// console.log("birthday2.getDate()", birthday2.getDate())
// console.log("birthday2.getDay()", birthday2.getDay())
// console.log("birthday2.getFullYear()", birthday2.getFullYear())

// console.log("birthday2.getMonth()", birthday2.getMonth())

// console.log(
//   `${birthday2.getDate()}/${birthday2.getMonth()}/${birthday2.getFullYear()}`
// )

const getDays = (data) => {
  let dataNascimento = new Date(data)
  let dataHoje = new Date()

  const diferencaEmMilisegundos = dataHoje - dataNascimento
  const diasEmMilisegundos = 1000 * 60 * 60 * 24
  const anosEmMilisegundos = diasEmMilisegundos * 365

  const dias = diferencaEmMilisegundos / diasEmMilisegundos
  console.log("dias", dias)

  const anos = diferencaEmMilisegundos / anosEmMilisegundos
  console.log("anos", anos)
}

getDays("1995-03-04")
