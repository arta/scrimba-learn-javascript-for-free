let countEl = document.getElementById('count-el')
let count = 0

function increment() {
  count ++
  countEl.textContent = count
}

function save() {
  console.log('Saved new count')
}
