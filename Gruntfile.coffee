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
        dest: './'
        ext: '.html'
    coffee:
      compile:
        expand: true
        cwd: './src/'
        src: '*.coffee'
        dest: './'
        ext: '.js'
    stylus:
      compile:
        options:
          compress: false
        expand: true
        cwd: './src/'
        src: '*.styl'
        dest: './'
        ext: '.css'
    watch:
      jade:
        files: ['./src/*.jade']
        tasks: 'jade'
      coffee:
        files: ['./src/*.coffee']
        tasks: 'coffee'
      stylus:
        files: ['./src/*.styl']
        tasks: 'stylus'
  
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  
  grunt.registerTask 'build', ['jade', 'coffee', 'stylus']
  grunt.registerTask 'default', ['watch']
