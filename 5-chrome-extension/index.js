const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
let myLeads = []
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById('tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

// Dummy data for a current tab ..
// .. in the actual/correct format exposed by Chrome API to us:
const tabs = [
  { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]

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

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener('click', function() {
  console.log(tabs[0].url)
})

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
