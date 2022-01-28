const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  // Clear out the input field
  inputEl.value = null
  renderLeads()
}

inputBtn.addEventListener('click', saveLead)

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`
  }
  ulEl.innerHTML = listItems
}
