module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          paths: ['styl'],
          urlfunc: 'url',
          'include css': true,
          compress: true
        },
        files: {
          '../resources/public/css/app.css': ['styl/app.styl', 'styl/dreiser.styl']
        }
      }
    },


    concat: {
      dist: {
        files: {
          '../resources/public/js/vendor.js': ['js/jquery.js', 'js/foundation.min.js', 'js/nprogress.js'],
        }
      }
    },

    uglify: {
      minify: {
        files: {
          '../resources/public/js/vendor.js': ['../resources/public/js/vendor.js']
        }
      }
    },

    watch: {
      src: {
        files: ['styl/*.styl', 'styl/foundation/*.styl', 'js/*.js'],
        tasks: ['stylus:compile']
      }
    },


    cssmin: {
      minify: {
        src: '../resources/public/css/app.css',
        dest: '../resources/public/css/app.css'
      }
    }



  });





  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['stylus:compile', 'concat:dist', 'uglify:minify', 'cssmin:minify']);

};
