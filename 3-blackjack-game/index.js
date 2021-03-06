let player = {
  name: 'Arta',
  chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = `${player.name}: ${player.chips}`

// Return random Blackjack cards values
// if 1           return 11
// if 11, 12, 13  return 10
function getRandomCard() {
  let randomNumber1to13 = Math.floor(Math.random() * 13) + 1

  if (randomNumber1to13 === 1) {
    return 11
  } else if (randomNumber1to13 > 10) {
    return 10
  } else {
    return randomNumber1to13
  }
}

function startGame() {
  cards.length = 0
  isAlive = true
  cards.push(getRandomCard(), getRandomCard())
  sum = cards.reduce((total, card) => total + card, 0)
  // for (let i = 0; i < cards.length; i++) { sum += cards[i] }
  // sum = cards[0] + cards[1]
  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
}
