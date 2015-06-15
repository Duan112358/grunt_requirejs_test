module.exports = {
  options: {
    livereload: true //use default 35729 
  },
  dev: {
    files: ['*.html', 'js/**/*.js', 'less/*.less'],
    tasks: ['jshint', 'less']
  }
}
