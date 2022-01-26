const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
}

inputBtn.addEventListener('click', saveLead)

// Let's try a different method!
// Use createElement() and append() instead of innerHTML
for (let i = 0; i < myLeads.length; i++) {
  // ulEl.innerHTML += `<li>${myLeads[i]}</li>`

  // create li element
  // insert lead
  // insert element into ul element
  const liEl = document.createElement('li')
  liEl.textContent = myLeads[i]
  ulEl.append(liEl)
}
