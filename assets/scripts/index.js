'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const uploadEvents = require('./uploads/events')
const uploadUi = require('./uploads/ui')
const uploadApi = require('./uploads/api')

$(() => {
  setAPIOrigin(location, config)
  // Register Authorization Events
  $('form').hide()
  $('.registration').on('submit', events.onRegistration)
  $('.sign-in').on('submit', events.onSignIn)
  $('.change-password').on('submit', events.onChangePassword)
  $('.signout').on('click', events.onSignOut)

  // Register Event to Show Form Modal
  $('.auth-modal').on('click', events.onModal)

  // View Events
  uploadEvents.onShowGallery()
  // Change PageShowIndex --> onShowGallery
  $('.pageShowz').on('click', uploadEvents.onShowGallery)
  $('.showIndex').on('click', uploadEvents.onShowIndex)

  // Upload Events
  $('#multipart-form-data').on('submit', uploadEvents.createUploadMultiPart)
  $('.pageShowz').on('click', uploadEvents.pageShowIndex)
  $('.showIndex').on('click', uploadEvents.onShowIndex)

  const showUpdateForm = function (event) {
    $(this).siblings().removeClass('hidden')
  }

  const onUpdate = function (event) {
    // event.preventDefault()
    // const itemId = $(event.target).attr('data-id')
    const itemData = new FormData(this.siblings())
    console.log(itemData)
    uploadApi.updateUpload(itemData)
      .then(uploadUi.updateUploadSuccess)
      .catch(uploadUi.updateUploadFail)
  }

  $('#photo-grid').on('click', '.delete-upload', uploadUi.onDelete)
  $('#photo-grid').on('click', '.update-form-button', showUpdateForm)
  $('#photo-grid').on('submit', '.update-upload', onUpdate)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
