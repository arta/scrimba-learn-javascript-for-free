const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

function saveLead() {
  myLeads.push(inputEl.value)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  inputEl.value = null
  renderLeads()
}

function deleteAllLeads() {
  localStorage.clear()
  myLeads.length = 0
  renderLeads() // instead of ulEl.innerHTML = ''
}

inputBtn.addEventListener('click', saveLead)

deleteBtn.addEventListener('dblclick', deleteAllLeads)

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li class='li-ul-el'>
        <a class='a-li-ul-el' href=https://${myLeads[i]} target='_blank'>
          ${myLeads[i]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}
