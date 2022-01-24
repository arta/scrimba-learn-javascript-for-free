const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += `${myLeads[i]} `
}
