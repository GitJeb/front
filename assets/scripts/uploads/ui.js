'use strict'

const uploadApi = require('./api')
const indexView = require('../templates/ImageIndexAll.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

const success = function (data) {
  console.log('success data is:', data)
  $('#message').html('success!')
}

const error = function (error) {
  $('#message').html('error')
  console.log('error is:', error)
}

const indexAllSuccess = function (data) {
  console.log(data)
  $('photo-grid').html(indexView({uploads: data.uploads}))

  $('.update-upload').on('click', onUpdate)
  $('.delete-upload').on('click', onDelete)

  const onDelete = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    uploadApi.deleteUpload(data)
      .then(deleteUploadSuccess)
      .catch(deleteUploadFail)
  }

  const onUpdate = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    uploadApi.updateUpload(data)
      .then(updateUploadSuccess)
      .catch(updateUploadFail)
  }
}

const indexAllFail = function (error) {
  $('#message').html('error')
  console.log('indexAll error:', error)
}

const deleteUploadSuccess = function (data) {
  console.log('success data is:', data)
  $('#message').html('upload successfully deleted!')
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

module.exports = {
  success,
  error,
  indexAllSuccess,
  indexAllFail,
  deleteUploadSuccess,
  deleteUploadFail,
  updateUploadSuccess,
  updateUploadFail
  // onDelete,
  // onUpdate
}
