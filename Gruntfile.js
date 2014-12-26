module.exports = function(grunt){
  grunt.initConfig({
    requirejs: {
      index: {
        options: {
          baseUrl: 'js',
          mainConfigFile: 'js/main.js'
        }
      }
    },
    clean: ['dist','css'],
    hashres: {
      options: {
        encoding: 'utf-8',
        fileNameFormat: '${name}.${hash}.${ext}',
        renameFiles: true
      },
      prop: {
        src: ['dist/js/*.js', 'dist/css/*.css'],
        dest: 'dist/*.html'
      }
    },
    targethtml: {
      options: {
        curlyTags: {
          ver: '<%= grunt.template.today("HHyyyyddmmss") %>'
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
    },
    less: {
      dev: {
        expand: true,
        cwd: 'less',
        src: '*.less',
        dest: 'css',
        ext: '.css'
      }
    },
    cssmin: {
      min: {
        files: [{
          expand: true,
          cwd: 'css',
          src: '*.css',
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: ['Gruntfile.js', 'js/**/*.js', '!js/almond.js', '!js/require.js']
      }
    },
    watch: {
      options: {
        livereload: true //use default 35729 
      },
      dev: {
        files: ['*.html', 'js/**/*.js', 'less/*.less'],
        tasks: ['jshint', 'less']
      }
    },
    connect: {
      dev: {
        options: {
          port: 8999,
          open: true,
          host: 'localhost'
        }
      },
      release: {
        options: {
          port: 9000,
          base: 'dist',
          open: true,
          keepalive: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'jshint', 'less', 'targethtml:dev', 'connect:dev', 'watch']);
  grunt.registerTask('release', ['clean', 'jshint', 'requirejs', 'less', 'cssmin', 'targethtml:release', 'hashres', 'connect:release']);
};
