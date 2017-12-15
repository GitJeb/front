'use strict'
const store = require('../store')

const config = require('../config')
const store = require('../store')

const createMulti = function (data) {
  return $.ajax({
    url: config.apiOrigin,
    method: 'POST',
    data,
    contentType: false,
    processData: false
  })
}

const indexAll = function () {
  return $.ajax({
    url: config.apiOrigin,
    method: 'GET',
    contentType: false,
    processData: false
  })
}

const deleteUpload = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads/' + store.upload.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateUpload = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/uploads/' + store.upload.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createMulti,
  indexAll,
  deleteUpload,
  updateUpload
}
