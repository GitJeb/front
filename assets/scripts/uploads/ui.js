'use strict'

const success = function (data) {
  console.log('success data is:', data)
  $('#message').html('success!')
}

const error = function (error) {
  $('#message').html('error')
  console.log('error is:', error)
}

module.exports = {
  success,
  error
}
