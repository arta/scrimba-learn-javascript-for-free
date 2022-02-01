const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  inputEl.value = null
  renderLeads()
}

inputBtn.addEventListener('click', saveLead)

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?
    listItems += `<li><a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`
  }
  ulEl.innerHTML = listItems
}
