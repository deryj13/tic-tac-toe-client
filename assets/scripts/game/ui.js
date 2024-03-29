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

const newGameSuccess = (responseData) => {
  store.game = responseData.game
  gameSuccessMessage('Good luck, have fun!')
  $('#board').removeClass('hide-board')
  $('.cell').text('')
}

const newGameFailure = () => {
  gameFailureMessage(`New game won't load :(`)
}

const player1MoveSuccess = (event) => {
  $(event).text(store.player1)
  $(event).css('color', 'blue')
  if (!store.over) {
    gameSuccessMessage(`Nice! Player 2's turn!`)
  }
}

const player1MoveFailure = (event) => {
  if (player1MoveSuccess === false) {
    gameFailureMessage(`Player 2 failed to make a move!`)
  }
}

const player2MoveSuccess = event => {
  $(event).text(store.player2)
  $(event).css('color', 'red')
  if (!store.over) {
    gameSuccessMessage(`Awesome! Player 1's turn!`)
  }
}

const player2MoveFailure = (event) => {
  if (player2MoveSuccess === false) {
    gameFailureMessage(`Player 2 failed to make a move!`)
  }
}

const theWinner = () => {
  gameSuccessMessage(`${store.winner}, WINS!`)
}

const draw = () => {
  gameSuccessMessage(`It's a ${store.winner}! Good game!`)
}

const illegalMove = () => {
  gameFailureMessage('Invalid move!!!')
}

const indexGameSuccess = (data) => {
  gameSuccessMessage(`You have played ${data.games.length} times!`)
}

const indexGameFailure = (data) => {
  gameFailureMessage(`Unable to retrieve games!`)
}

const startNewGame = () => {
  gameSuccessMessage(`GAME OVER, start a new game!`)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  player1MoveSuccess,
  player1MoveFailure,
  player2MoveSuccess,
  player2MoveFailure,
  theWinner,
  draw,
  illegalMove,
  indexGameSuccess,
  indexGameFailure,
  startNewGame
}
