'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const newGame = function (responseData) {
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  store.currentTurn = 1
  store.movesPlayed = 0
  store.board = ['', '', '', '', '', '', '', '', '']
  store.player1 = 'X'
  store.player2 = 'O'
  store.winner = ''
  store.over = false
  store.index = null
  store.value = null
}

const getGames = event => {
  api.indexGame()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const xTracker = () => {
  store.board[$(event.target).attr('id')] = store.player1
  store.value = store.player1
  store.index = $(event.target).attr('id')
}

const oTracker = () => {
  store.board[$(event.target).attr('id')] = store.player2
  store.value = store.player2
  store.index = $(event.target).attr('id')
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

const gameOver = function () {
  if (gameWon() || drawGame()) {
    store.over = true
  }
}

const move = function () {
  if (store.over === true) {
    ui.startNewGame()
  } else if (store.over !== true) {
    if ($(event.target).text() === '') {
      store.movesPlayed++
      if (store.currentTurn === 1) {
        xTracker()
        checkForDraw()
        checkForWinner()
        gameOver()
        store.currentTurn++
        api.gameUpdate()
          .then(ui.player1MoveSuccess(event.target))
<<<<<<< HEAD
          .catch(console.error)
=======
          .catch(ui.player1MoveFailure(event.target))
>>>>>>> game
      } else {
        ui.player2MoveSuccess()
        oTracker()
        checkForDraw()
        checkForWinner()
        gameOver()
        store.currentTurn--
        api.gameUpdate()
          .then(ui.player2MoveSuccess(event.target))
<<<<<<< HEAD
          .catch(console.error)
=======
          .catch(ui.player2MoveFailure(event.target))
>>>>>>> game
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
  move,
  getGames
}
