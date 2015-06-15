module.exports = {
  options: {
    encoding: 'utf-8',
    fileNameFormat: '${name}.${hash}.${ext}',
    renameFiles: true
  },
  prop: {
    src: ['dist/js/*.js', 'dist/css/*.css'],
    dest: 'dist/*.html'
  }
}
