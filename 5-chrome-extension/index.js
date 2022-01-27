const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  // 2. Call the renderLeads() function
  renderLeads()
}

inputBtn.addEventListener('click', saveLead)

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`
  }
  ulEl.innerHTML = listItems
}
