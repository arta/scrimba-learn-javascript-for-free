const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

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

inputBtn.addEventListener('click', saveLead)

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
