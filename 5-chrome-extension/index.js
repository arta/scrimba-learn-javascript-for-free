const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const myLeads = []
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
  // Save the myLeads array to localStorage
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  // console log to verify that it works:
  console.log(localStorage.getItem('myLeads'))

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
