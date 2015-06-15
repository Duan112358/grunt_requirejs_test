module.exports = {
  options: {
    curlyTags: {
      ver: '<%= grunt.template.today("yymmdd") %>'
    },
  },
  release:{
    expand: true, 
    cwd: '.',
    dest: 'dist',
    src: '*.html'
  },
  dev:{
    expand: true, 
    cwd: '.',
    dest: 'dist',
    src: '*.html'
  }
}
