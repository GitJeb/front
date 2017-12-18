'use strict'

const uploadApi = require('./api')
const indexView = require('../templates/ImageIndexAll.handlebars')
<<<<<<< HEAD
const pageShow = require('../templates/pageShow.handlebars')
const store = require('../store')
=======
// const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')
>>>>>>> Continuing to struggle with update


const success = function () {
  $('#message').html('File uploaded successfully!')
}

const error = function (error) {
  $('#message').html('error')
  console.log('error is:', error)
}

const showUpdateForm = function () {
  $('.update-form').removeClass('hidden')
}

const onUpdate = function (data) {
  data.preventDefault()
  // const itemId = $(event.target).attr('data-id')
  const itemData = new FormData(event.target)
  console.log(itemData)
  uploadApi.updateUpload(itemData)
    .then(updateUploadSuccess)
    .catch(updateUploadFail)
}

const onDelete = function (data) {
  const itemId = $(event.target).attr('data-id')
  uploadApi.deleteUpload(itemId)
    .then(deleteUploadSuccess)
    .catch(deleteUploadFail)
}

const indexAllSuccess = function (data) {
  $('#photo-grid').html(indexView({uploads: data.uploads}))
  activateLink('.showIndex')

  const onDelete = function (data) {
    const itemId = $(event.target).attr('data-id')
    uploadApi.deleteUpload(itemId)
      .then(deleteUploadSuccess)
      .catch(deleteUploadFail)
  }

  const onUpdate = function (data) {
    event.preventDefault()
    const itemId = $(event.target).attr('data-id')
    console.log(itemId)
    uploadApi.updateUpload(itemId)
      .then(updateUploadSuccess)
      .catch(updateUploadFail)
  }
  $('.update-upload').on('click', onUpdate)
  $('.delete-upload').on('click', onDelete)
}

const indexAllFail = function (error) {
  $('#message').html('error')
  console.log('indexAll error:', error)
}

const deleteUploadSuccess = function (data) {
  console.log('success data is:', data)
  $('#message').html('upload successfully deleted!')

  // Refresh My Uploads Page
  uploadApi.indexAll()
    .then(indexAllSuccess)
    .catch(indexAllFail)
}

const deleteUploadFail = function (error) {
  $('#message').html('error on delete')
  console.log('upload delete error:', error)
}

const updateUploadSuccess = function (data) {
  console.log('success data is:', data)
  $('#message').html('upload successfully updated!')
}

const updateUploadFail = function (error) {
  $('#message').html('error on update')
  console.log('upload update error:', error)
}

const ShowGallerySuccess = function (data) {
  $('#photo-grid').html(pageShow({uploads: data.uploads}))
  activateLink('.pageShowz')
}

const ShowGalleryFail = function () {
  $('#message').html('error')
}

const activateLink = function (target) {
  $('li').removeClass('active')
  $(target).addClass('active')
}

module.exports = {
  success,
  error,
  indexAllSuccess,
  indexAllFail,
  deleteUploadSuccess,
  deleteUploadFail,
  updateUploadSuccess,
  updateUploadFail,
  ShowGallerySuccess,
  ShowGalleryFail
}
