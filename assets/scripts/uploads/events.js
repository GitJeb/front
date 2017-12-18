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
    .then(onShowGallery)
    .catch(uploadUi.error)
  this.reset()
  return false
}

// Show all images uploaded
const onShowIndex = function () {
  uploadApi.indexAll()
    .then(uploadUi.indexAllSuccess)
    .catch(uploadUi.indexAllFail)
}

const onShowGallery = function () {
  uploadApi.indexAll()
  // pageShowSuccess/ Fail --> ShowGallery Sucess/Fail
  .then(uploadUi.ShowGallerySuccess)
  .catch(uploadUi.ShowGalleryFail)
}

module.exports = {
  createUploadMultiPart,
  onShowIndex,
  onShowGallery
}
