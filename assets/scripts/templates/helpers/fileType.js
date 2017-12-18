const fileType = function (upload, options) {

  const fileTypes = {
    pdf: 'http://resources.snappii.com/wp-content/uploads/2015/02/pdf-icon.png',
    generic: 'https://cdn.fileinfo.com/img/fv/file_viewer_android.png'
  }

  if (upload.file_type) {
    if (upload.file_type.split('/').indexOf('image') > -1) {
      return '<img class="picz" src=' + upload.url + '>'
    } else {
      const file = upload.file_type.split('/')[1]
      if (fileTypes[file]) {
        return '<img class="picz" src=' + fileTypes[file] + '>'
      } else {
        return '<img class="picz" src=' + fileTypes['generic'] + '>'
      }
    }
  }
}

module.exports = fileType
