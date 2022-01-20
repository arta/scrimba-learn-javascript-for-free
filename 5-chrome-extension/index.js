const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []

// Push the value "www.awesomelead.com" to myLeads
// when the input button is clicked

function saveLead() {
  myLeads.push('www.awesomelead.com')
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)
