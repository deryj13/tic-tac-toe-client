'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const newGame = function () {
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  store.currentTurn = 1
  store.movesPlayed = 0
  store.board = ['', '', '', '', '', '', '', '', '']
  store.player1 = 'X'
  store.player2 = 'O'
  store.winner = ''
  $('.cell').text('')
}

const xTracker = () => {
  store.board[$(event.target).attr('id')] = store.player1
  console.log(store.board)
}

const oTracker = () => {
  store.board[$(event.target).attr('id')] = store.player2
  console.log(store.board)
}

const gameWon = function () {
  if (store.movesPlayed > 4) {
    if (store.board[0] !== '' && store.board[1] !== '' && store.board[2] !== '' &&
    store.board[0] === store.board[1] && store.board[1] === store.board[2]) {
      return true
    } if (store.board[3] !== '' && store.board[4] !== '' && store.board[5] !== '' &&
    store.board[3] === store.board[4] && store.board[4] === store.board[5]) {
      return true
    } if (store.board[6] !== '' && store.board[7] !== '' && store.board[8] !== '' &&
    store.board[6] === store.board[7] && store.board[7] === store.board[8]) {
      return true
    } if (store.board[0] !== '' && store.board[3] !== '' && store.board[6] !== '' &&
    store.board[0] === store.board[3] && store.board[3] === store.board[6]) {
      return true
    } if (store.board[1] !== '' && store.board[4] !== '' && store.board[7] !== '' &&
    store.board[1] === store.board[4] && store.board[4] === store.board[7]) {
      return true
    } if (store.board[2] !== '' && store.board[5] !== '' && store.board[8] !== '' &&
    store.board[2] === store.board[5] && store.board[5] === store.board[8]) {
      return true
    } if (store.board[0] !== '' && store.board[4] !== '' && store.board[8] !== '' &&
    store.board[0] === store.board[4] && store.board[4] === store.board[8]) {
      return true
    } if (store.board[2] !== '' && store.board[4] !== '' && store.board[6] !== '' &&
    store.board[2] === store.board[4] && store.board[4] === store.board[6]) {
      return true
    }
  } else {
    return false
  }
}

const checkForWinner = function () {
  if (gameWon()) {
    if (store.currentTurn === 1) {
      store.winner = 'Player 1'
      $('#gameMessage').text(store.winner + ', WINS!')
    } else {
      store.winner = 'Player 2'
      $('#gameMessage').text(store.winner + ', WINS!')
    }
  }
}

function cellValue (value) {
  return value.length !== 0
}

const checkForDraw = function () {
  if (gameWon() !== true) {
    if (store.board.every(cellValue)) {
      store.winner = 'DRAW'
      $('#gameMessage').text(`It's a ${store.winner} xD!`)
    }
  }
}

const move = function () {
  store.movesPlayed++
  if (gameWon() !== true) {
    if ($(event.target).text() === '') {
      if (store.currentTurn === 1) {
        $(event.target).text(store.player1)
        $(event.target).css('color', 'blue')
        xTracker()
        ui.player1MoveSuccess()
        checkForDraw()
        checkForWinner()
        store.currentTurn++
      } else {
        $(event.target).text(store.player2)
        $(event.target).css('color', 'red')
        oTracker()
        ui.player2MoveSuccess()
        checkForDraw()
        checkForWinner()
        store.currentTurn--
      }
    } else {
      console.log(`illegal move!`)
    }
  }
}

module.exports = {
  newGame,
  move
}
