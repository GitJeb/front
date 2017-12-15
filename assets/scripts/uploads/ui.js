'use strict'

const uploadApi = require('./api')
const indexView = require('../templates/ImageIndexAll.handlebars')
// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
  $('#photo-grid').html(indexView({uploads: data.uploads}))

  const onDelete = function (data) {
    const itemId = $(event.target).attr('data-id')
    uploadApi.deleteUpload(itemId)
      .then(deleteUploadSuccess)
      .catch(deleteUploadFail)
  }

  const onUpdate = function (data) {
    store.id = $(event.target).data('id')
    event.preventDefault()
    uploadApi.updateUpload(data)
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
