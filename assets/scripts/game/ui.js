'use strict'

// const store = require('../store')

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
}

const newGameFailure = () => {
  gameFailureMessage(`New game won't load :(`)
}

const player1MoveSuccess = () => {
  console.log('move made!')
  gameSuccessMessage(`Nice! Player 2's turn!`)
}
const player2MoveSuccess = () => {
  console.log('move made!')
  gameSuccessMessage(`Awesome! Player 1's turn!`)
}

// we need to track current players, which we can do with currentTurn
// establish players
// if currentTurn === 1, its player 1's turn
// if currentTurn === 2, its player 2's turn
// add currentplayer to the board
// if player makes a move, their value gets pushed to the board
// board.push()

// let board = ['', '', '', '', '', '', '', '', '']

module.exports = {
  newGameSuccess,
  newGameFailure,
  player1MoveSuccess,
  player2MoveSuccess
}
