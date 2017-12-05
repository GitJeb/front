const ui = require('./ui')

const OngetBooks = function (event) {
  event.preventDefault()
    .then(ui.success)
    .catch(ui.fail)
}

module.exports = {
  OngetBooks
}
