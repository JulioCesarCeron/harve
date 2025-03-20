const buttonElement = document.getElementById("add-note")
const inputElement = document.getElementById("note")
const listNotesElement = document.getElementById("list-notes")
const averageElement = document.getElementById("average")
const faultElement = document.getElementById("fault")
const faultsElement = document.getElementById("faults")
const resultElement = document.getElementById("result")
const nameElement = document.getElementById("name")

let sumNotes = 0
let sumFaults = 0

buttonElement.addEventListener("click", () => {
  const note = inputElement.value
  sumNotes = sumNotes + Number(note)

  const fault = faultElement.value

  // Como descobrir o tipo de uma variavel
  console.log('valor vindo do html "fault" ', typeof fault)
  const faultNumber = Number(fault)
  console.log("valor convertido 'fault'", typeof faultNumber)

  sumFaults = sumFaults + Number(fault)

  listNotesElement.innerHTML += `<li>${note}</li>`
  faultsElement.innerHTML += `<li>${fault}</li>`

  inputElement.value = ""

  if (listNotesElement.children.length === 6) {
    buttonElement.disabled = true

    const average = sumNotes / 4

    averageElement.innerHTML += `<p>${average}</p>`

    // if (average >= 7) {
    //   alert("Aprovado")
    // } else {
    //   alert("Reprovado")
    // }

    // printar na tela o total de faltas
    faultsElement.innerHTML += `<hr>`
    faultsElement.innerHTML += `<p>Total de faltas: ${sumFaults}</p>`

    const louvorMessage =
      average === 10 && sumFaults === 0
        ? `<p>${nameElement.value} tirou a média ${average} e não teve nenhuma falta. Parabéns ${nameElement.value}, <span style="color: green; text-transform: uppercase">Aprovado com louvor</span><p>`
        : false

    if (louvorMessage) {
      resultElement.innerHTML += louvorMessage
    } else if (average >= 5 && average < 7 && sumFaults <= 10) {
      resultElement.innerHTML += `<p style="color: yellow; text-transform: uppercase">Recuperação</p>`
    } else {
      const message = average >= 7 && sumFaults <= 10 ? "Aprovado" : "Reprovado"
      alert(message)
    }
  }
})
