'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  $('.new-game').on('click', gameEvents.newGame)
})

$(() => {
  $('.cell').on('click', gameEvents.move)
})
