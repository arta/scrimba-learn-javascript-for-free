// create container of available services & prices
// grab add service buttons into variables
// grab invoice body into variable
// grab send invoice button into variable
// listen for add service button click to add its service
// write function that adds the service to invoice
// update & render invoice lines
// update & render invoice total (also render the note)
// disallow adding a service more than once
// listen for send invoice button click to "send" (reset)
// write function that "sends" (resets) the invoice

const services = [
  { name: 'Wash Car', price: 10 },
  { name: 'Mow Lawn', price: 20 },
  { name: 'Pull Weeds', price: 30 }
]

const get = (elemementId) => document.getElementById(elemementId)

const btnWashCar = get('btn-wash-car')
const btnMowLawn = get('btn-mow-lawn')
const btnPullWeeds = get('btn-pull-weeds')
const invoiceLines = get('invoice-lines')
const spanNotes = get('span-notes')
const spanTotal = get('span-total')
const btnSendInvoice = get('btn-send-invoice')

let total = 0

btnWashCar.addEventListener('click', () => addService(services[0]))
btnMowLawn.addEventListener('click', () => addService(services[1]))
btnPullWeeds.addEventListener('click', () => addService(services[2]))

btnSendInvoice.addEventListener('click', sendInvoice)

function addService(service) {
  invoiceLines.innerHTML += `
    <p class="p-invoice-line">
      <span>${service.name}</span>
      <span class="span-price"><span>$</span>${service.price}</span>
    </p>
  `
  spanNotes.textContent = 'We accept cash, credit cards, or PayPal'
  total += service.price
  spanTotal.textContent = `$${total}`
}

function sendInvoice() {
  invoiceLines.innerHTML = ''
  spanNotes.textContent = ''
  total = 0
  spanTotal.textContent = `$${0}`
}