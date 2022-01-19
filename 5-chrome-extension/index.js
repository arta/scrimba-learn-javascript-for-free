const inputBtn = document.getElementById('input-btn')

function saveLead() {
  console.log('Button clicked!')
}

inputBtn.addEventListener('click', saveLead)

inputBtn.addEventListener('click', () => console.log('Button clicked!'))

inputBtn.addEventListener('click', function() {
  console.log('Button clicked!')
})
