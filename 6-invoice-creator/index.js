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
const invoiceLines = get('invoice-lines')

btnWashCar.addEventListener('click', function() {
  invoiceLines.innerHTML += `
    <p class="p-invoice-line">
      <span>Wash Car</span>
      <span class="span-price"><span>$</span>10</span>
    </p>
  `
})

