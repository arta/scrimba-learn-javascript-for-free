const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']

function saveLead() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)

// Log out the items in the myLeads array using a for loop

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i])
}
