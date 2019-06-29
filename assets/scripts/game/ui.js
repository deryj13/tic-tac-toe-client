'use strict'

const store = require('../store')

const gameSuccessMessage = message => {
  $('#gameMessage').text(message)
  $('#gameMessage').removeClass('failure')
  $('#gameMessage').addClass('success')
}

const gameFailureMessage = message => {
  $('#gameMessage').text(message)
  $('#gameMessage').removeClass('success')
  $('#gameMessage').addClass('failure')
}

const newGameSuccess = () => {
  console.log('new game!')
  gameSuccessMessage('Good luck, have fun!')
  $('.cell').text('')
}

const newGameFailure = () => {
  gameFailureMessage(`New game won't load :(`)
}

const player1MoveSuccess = () => {
  console.log('move made!')
  gameSuccessMessage(`Nice! Player 2's turn!`)
  $(event.target).text(store.player1)
  $(event.target).css('color', 'blue')
}
const player2MoveSuccess = () => {
  console.log('move made!')
  gameSuccessMessage(`Awesome! Player 1's turn!`)
  $(event.target).text(store.player2)
  $(event.target).css('color', 'red')
}

const theWinner = () => {
  gameSuccessMessage(`${store.winner}, WINS!`)
}

const draw = () => {
  console.log('draw')
  gameSuccessMessage(`It's a ${store.winner}! Good game!`)
}

const illegalMove = () => {
  console.log('illegal move!')
  gameFailureMessage('Invalid move!!!')
}
module.exports = {
  newGameSuccess,
  newGameFailure,
  player1MoveSuccess,
  player2MoveSuccess,
  theWinner,
  draw,
  illegalMove
}
