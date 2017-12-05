const bookstemplate = require('../templates/book-listing')

const success = function (data) {
  const bookshtml = bookstemplate({ 'books' : data.books})

}


const fail = function () {

}


module.exports = {
  success,
  fail
}
