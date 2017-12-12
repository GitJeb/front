// Auth Modal Controls
const showModal = function (buttonId) {
  // Class of forms map to id of buttons to disiplay them.
  // TargetForm turns ID into class.
  const targetForm = $('.' + buttonId)
  // Map button id to Form titles
  const formtitle = {
    'registration': 'Sign Up',
    'sign-in': 'Sign In',
    'change-password': 'Change Pasword'
  }
  // Make sure error div is hidden
  $('.formerror-auth').addClass('hidden')
  // Hides all forms in modal
  $('form').hide()
  // Set Modal title
  $('.modal-title-auth').html(formtitle[buttonId])
  // Show form within modal
  targetForm.show()
  // Show modal
  $('.auth').modal('show')
}

module.exports = {
  showModal
}
