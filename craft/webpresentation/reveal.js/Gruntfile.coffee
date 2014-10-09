'use strict'

module.exports = (grunt)->
  grunt.initConfig
    jade:
      compile:
        options:
          pretty: true
        expand: true
        cwd: './src/'
        src: '*.jade'
        dest: './dest/'
        ext: '.html'
    watch:
      jade:
        files: ['./src/*.jade']
        tasks: 'jade'
  
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  
  grunt.registerTask 'build', ['jade']
  grunt.registerTask 'default', ['watch']
