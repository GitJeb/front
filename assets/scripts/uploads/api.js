'use strict'

const createMulti = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    contentType: false,
    processData: false
  })
}

module.exports = {
  createMulti
}
