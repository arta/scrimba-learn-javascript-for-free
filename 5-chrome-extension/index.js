const deleteBtn = document.getElementById('delete-btn')
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const tabBtn = document.getElementById('tab-btn')
const ulEl = document.getElementById('ul-el')
let myLeads = []

function deleteAllLeads() {
  localStorage.clear()
  myLeads.length = 0
  renderLinks(myLeads) // instead of ulEl.innerHTML = ''
}

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

function saveLead() {
  myLeads.push(inputEl.value)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  inputEl.value = null
  renderLinks(myLeads)
}

deleteBtn.addEventListener('dblclick', deleteAllLeads)

inputBtn.addEventListener('click', saveLead)

tabBtn.addEventListener('click', function() {
  // Use Chrome API to get the current window active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLinks(myLeads)
  })
})

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLinks(myLeads)
}
