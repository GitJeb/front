const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// Authentication Events //

// Show Modal
const onModal = (event) => {
  ui.showModal(event.target.id)
}

// Register
const onRegistration = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

// Sign in
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

// Change Password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFail)
}

// Sign Out
const onSignout = function (event) {
  event.preventDefault()
  api.signout()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFail)
}

module.exports = {
  onModal,
  onRegistration,
  onSignIn,
  onChangePassword,
  onSignout
}
