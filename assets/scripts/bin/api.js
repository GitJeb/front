
const config = require('../config.js')

const GetBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/books/',
    contentType: 'application/json'
  })
}

module.exports = {
  GetBooks
}
