// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []

function saveLead() {
  console.log('Button clicked!')
}

inputBtn.addEventListener('click', saveLead)
