const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLinks(myLeads)
}

function saveLead() {
  myLeads.push(inputEl.value)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  inputEl.value = null
  renderLinks(myLeads)
}

function deleteAllLeads() {
  localStorage.clear()
  myLeads.length = 0
  renderLinks(myLeads) // instead of ulEl.innerHTML = ''
}

inputBtn.addEventListener('click', saveLead)

deleteBtn.addEventListener('dblclick', deleteAllLeads)

function renderLinks(leads) {
  let listItems = ''
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li class='li-ul-el'>
        <a class='a-li-ul-el' href=https://${leads[i]} target='_blank'>
          ${leads[i]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}
