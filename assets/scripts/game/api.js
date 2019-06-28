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

// const moveUpdate = game => {
//   return $.ajax({
//     url: config.apiUrl + '/',
//     data:,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createGame
  // makeMove
}
