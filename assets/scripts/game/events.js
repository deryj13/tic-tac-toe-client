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
      ui.theWinner()
    } else {
      store.winner = 'Player 2'
      ui.theWinner()
    }
  }
}

function cellValue (value) {
  return value.length !== 0
}

const drawGame = function () {
  if (gameWon() !== true) {
    if (store.board.every(cellValue)) {
      return true
    }
  }
}

const checkForDraw = function () {
  if (drawGame()) {
    store.winner = 'DRAW'
    ui.draw()
  }
}

const move = function () {
  store.movesPlayed++
  if (gameWon() !== true) {
    if ($(event.target).text() === '') {
      if (store.currentTurn === 1) {
        ui.player1MoveSuccess()
        // $(event.target).text(store.player1)
        // $(event.target).css('color', 'blue')
        xTracker()
        checkForDraw()
        checkForWinner()
        store.currentTurn++
      } else {
        ui.player2MoveSuccess()
        // $(event.target).text(store.player2)
        // $(event.target).css('color', 'red')
        oTracker()
        checkForDraw()
        checkForWinner()
        store.currentTurn--
      }
    } else {
      if (drawGame() !== true) {
        ui.illegalMove()
      }
    }
  }
}

module.exports = {
  newGame,
  move
}
