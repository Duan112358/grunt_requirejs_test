module.exports = function(grunt){
  var gtx = require('gruntfile-gtx').wrap(grunt);
  gtx.loadAuto();

  var gruntConfig = require('./grunt');
  gruntConfig.package = require('./package.json');
  gtx.config(gruntConfig);

  //require('load-grunt-tasks')(grunt);
  gtx.finalise();

  grunt.registerTask('default', ['clean', 'jshint', 'less', 'targethtml:dev', 'copy', 'connect:dev', 'watch']);
  grunt.registerTask('release', ['clean', 'jshint', 'requirejs', 'less', 'cssmin', 'targethtml:release', 'hashres', 'connect:release']);
};
