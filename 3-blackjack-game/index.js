let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

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
  let card = getRandomCard()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}
