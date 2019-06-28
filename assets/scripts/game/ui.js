'use strict'

// const store = require('../store')

const gameSuccessMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const gameFailureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const newGameSuccess = () => {
  console.log('new game!')
  gameSuccessMessage('Good luck, have fun!')
}

const newGameFailure = () => {
  gameFailureMessage(`New game won't load :(`)
}

const moveSuccess = () => {
  console.log('move made!')
  gameSuccessMessage('Turn Completed!')
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
  moveSuccess
}
