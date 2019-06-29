'use strict'

const config = require('../config')
const store = require('../store')

const createGame = game => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = game => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    data: {
      'game': {
        'cell': {
          'index': store.index,
          'value': store.value
        },
        'over': store.over
      }
    },
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  gameUpdate
}
