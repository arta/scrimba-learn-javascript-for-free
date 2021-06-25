// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// add event listener error() to purchase button
// set var holding error message
// write error() function displaying error message

let errorMessage = 'Something went wrong, please try again'
let errorEl = document.getElementById('error-el')

function error() {
  errorEl.textContent = errorMessage
}
