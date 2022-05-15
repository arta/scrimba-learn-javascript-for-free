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
// implement removal of individual services already added

const get = (elemementId) => document.getElementById(elemementId)

const btnWashCar      = get('btn-wash-car')
const btnMowLawn      = get('btn-mow-lawn')
const btnPullWeeds    = get('btn-pull-weeds')
const btnSendInvoice  = get('btn-send-invoice')

const invoiceLines    = get('invoice-lines')
const spanNotes       = get('span-notes')
const spanTotal       = get('span-total')

const services = [
  { id: 0, name: 'Wash Car', price: 10 },
  { id: 1, name: 'Mow Lawn', price: 20 },
  { id: 2, name: 'Pull Weeds', price: 30 }
]
const serviceIdsAdded = []
const servicesAdded = []
let total = 0

function addService(service) {
  if (!serviceIdsAdded.includes(service.id)) {
    serviceIdsAdded.push(service.id)
    servicesAdded.push(services[service.id])
    total += services[service.id].price
  }
  renderInvoice()
}

function renderInvoice() {
  let invoiceLinesStr = ''
  for (let i = 0; i < servicesAdded.length; i++) {
    invoiceLinesStr += `
    <p class="p-invoice-line">
      <span>${servicesAdded[i].name}</span>
      <span class="span-price"><span>$</span>${servicesAdded[i].price}</span>
    </p>
  `
  }
  invoiceLines.innerHTML = invoiceLinesStr
  spanNotes.textContent = 'We accept cash, credit cards, or PayPal'
  spanTotal.textContent = `$${total}`
}

function sendInvoice() {
  invoiceLines.innerHTML = ''
  spanNotes.textContent = ''
  total = 0
  serviceIdsAdded.length = 0
  servicesAdded.length = 0
  spanTotal.textContent = `$${0}`
}

btnWashCar.addEventListener('click', () => addService(services[0]))
btnMowLawn.addEventListener('click', () => addService(services[1]))
btnPullWeeds.addEventListener('click', () => addService(services[2]))

btnSendInvoice.addEventListener('click', sendInvoice)
