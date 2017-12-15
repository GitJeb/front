'use strict'
const store = require('../store')

const createMulti = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data,
    contentType: false,
    processData: false
  })
}

const indexAll = function () {
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'GET',
    contentType: false,
    processData: false
  })
}

module.exports = {
  createMulti,
  indexAll
}
