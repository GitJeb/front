'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

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
  uploadApi.indexAll()
    .then(uploadUi.indexAllSuccess)
    // .then(uploadUi.showUpdateForm)
    // .then(uploadUi.updateActions)
    .catch(uploadUi.indexAllFail)
}

const pageShowIndex = function () {
  uploadApi.indexAll()
  .then(uploadUi.pageShowSuccess)
  .catch(uploadUi.pageShowFail)
}

module.exports = {
  createUploadMultiPart,
  onShowIndex,
  pageShowIndex
}
