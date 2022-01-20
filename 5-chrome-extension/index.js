const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []

function saveLead() {
  // Push the value from the inputEl into the myLeads array
  // instead of the hard-coded "www.awesomeleads.com" value
  // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)
