const buttonElement = document.getElementById("add-note")
const inputElement = document.getElementById("note")
const listNotesElement = document.getElementById("list-notes")
const averageElement = document.getElementById("average")
const faultElement = document.getElementById("fault")
const faultsElement = document.getElementById("faults")
const resultElement = document.getElementById("result")

let sumNotes = 0
let sumFaults = 0

buttonElement.addEventListener("click", () => {
  const note = inputElement.value
  sumNotes = sumNotes + Number(note)

  const fault = faultElement.value
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

    const louvorMessage =
      average === 10 && sumFaults === 0
        ? `<p style="color: green; text-transform: uppercase">Aprovado com louvor</p>`
        : false

    if (louvorMessage) {
      resultElement.innerHTML += louvorMessage
    } else {
      const message = average >= 7 && sumFaults <= 10 ? "Aprovado" : "Reprovado"
      alert(message)
    }
  }
})
