'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const uploadApi = require('./api')
const uploadUi = require('./ui')

const createUploadMultiPart = function (event) {
  event.preventDefault()

  // let data = getFormFields(event.target)
  const data = new FormData(event.target)

  uploadApi.createMulti(data)
    .then(uploadUi.success)
    .catch(uploadUi.error)
}

// Show all images uploaded
const onShowIndex = function () {
  event.preventDefault()
  uploadApi.indexAll()
    .then(uploadUi.indexAllSuccess)
    .catch(uploadUi.indexAllFail)
}

const onDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  uploadApi.deleteUpload(data)
    .then(uploadUi.deleteUploadSuccess)
    .catch(uploadUi.deleteUploadFail)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  uploadApi.updateUpload(data)
    .then(uploadUi.updateUploadSuccess)
    .catch(uploadUi.updateUploadFail)
}

module.exports = {
  createUploadMultiPart,
  onShowIndex,
  onDelete,
  onUpdate
}
