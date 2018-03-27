gulp = require "gulp"
plumber = require "gulp-plumber"
pug = require "gulp-pug"
coffee = require "gulp-coffee"
stylus = require "gulp-stylus"

gulp.task 'pug', ->
  gulp.src("src/*.pug")
    .pipe plumber()
    .pipe pug(pretty: true)
    .pipe gulp.dest("./")
  return

gulp.task 'coffee', ->
  gulp.src("src/*.coffee")
    .pipe plumber()
    .pipe coffee(pretty: true)
    .pipe gulp.dest("./")
  return

gulp.task 'stylus', ->
  gulp.src("src/*.styl")
    .pipe plumber()
    .pipe stylus(pretty: true)
    .pipe gulp.dest("./")
  return

gulp.task 'watch', ->
  gulp.watch("src/*.pug", ['pug'])
  gulp.watch("src/*.coffee", ['coffee'])
  gulp.watch("src/*.styl", ['stylus'])
  return

gulp.task 'build', ->
  gulp.run "pug"
  gulp.run "coffee"
  gulp.run "stylus"

gulp.task "default", ['watch']
