module.exports = {
  min: {
    files: [{
      expand: true,
      cwd: 'css',
      src: '*.css',
      dest: 'dist/css',
      ext: '.min.css'
    }]
  }
}
