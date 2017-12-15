'use strict'

const indexView = require('../templates/ImageIndexAll.handlebars')

const success = function (data) {
  console.log('success data is:', data)
  $('#message').html('success!')
}

const error = function (error) {
  $('#message').html('error')
  console.log('error is:', error)
}

const indexAllSuccess = function (data) {
  console.log(data)
  $('body').html(indexView({uploads: data.uploads}))
}

const indexAllFail = function (error) {
  console.log('indexAll error:', error)
}

module.exports = {
  success,
  error,
  indexAllSuccess,
  indexAllFail
}
