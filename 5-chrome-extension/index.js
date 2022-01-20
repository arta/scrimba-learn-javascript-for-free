const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i])
}
