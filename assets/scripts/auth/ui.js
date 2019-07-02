'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('Something went wrong, try another email :(')
}

const signInSuccessful = responseData => {
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#index-games').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#game-index').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  successMessage(`You're logged in :)`)
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage(`failed login attempt, check credentials!`)
}

const changePassSuccessful = responseData => {
  successMessage('Changed password :)')
}

const changePassFailure = () => {
  failureMessage('Something went wrong :(')
}

const signOutSuccessful = () => {
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#index-games').addClass('hide')
  $('#new-game').addClass('hide')
  $('#board').addClass('hide-board')
  $('#game-index').addClass('hide')
  $('#gameMessage').text('')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  successMessage(`You're signed out! See you again :)`)
}

const signOutFailure = () => {
  failureMessage(`oh-oh, you're still logged in :(`)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePassSuccessful,
  changePassFailure,
  signOutSuccessful,
  signOutFailure
}
