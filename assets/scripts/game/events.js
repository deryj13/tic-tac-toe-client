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

const move = function () {
  store.movesPlayed++
  if ($(event.target).text() === '') {
    if (store.currentTurn === 1) {
      $(event.target).text(store.player1)
      $(event.target).css('color', 'blue')
      xTracker()
      ui.moveSuccess()
      store.currentTurn++
    } else {
      $(event.target).text(store.player2)
      $(event.target).css('color', 'red')
      store.currentTurn--
      oTracker()
      ui.moveSuccess()
    }
  } else {
    console.log(`illegal move!`)
  }
}

module.exports = {
  move,
  newGame
}
