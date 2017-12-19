'use strict'

const uploadApi = require('./api')
const indexView = require('../templates/ImageIndexAll.handlebars')
const pageShow = require('../templates/pageShow.handlebars')

const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store')

// upload success
const success = function () {
  $('#message').html('File uploaded successfully!')
}

// upload error
const error = function () {
  $('#message').html('Upload Unsuccessful. Please try again!')
}

const onUpdate = function (event) {
  event.preventDefault()
  const itemId = $(event.target).attr('data-id')
  const data = getFormFields(event.target)
  uploadApi.updateUpload(itemId, data)
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
}

const indexAllFail = function () {
  $('#message').html('Gallery Error!')
}

const deleteUploadSuccess = function () {
  $('#message').html('upload successfully deleted!')

  // Refresh My Uploads Page
  uploadApi.indexAll()
    .then(indexAllSuccess)
    .catch(indexAllFail)
}

const deleteUploadFail = function () {
  $('#message').html('Error on delete')
}

const updateUploadSuccess = function (data) {
  $('#message').html('upload successfully updated!')
  // Refresh My Uploads Page
  uploadApi.indexAll()
    .then(indexAllSuccess)
    .catch(indexAllFail)
}

const updateUploadFail = function () {
  $('#message').html('Error on update')
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
  ShowGalleryFail,
  onDelete,
  onUpdate
}
