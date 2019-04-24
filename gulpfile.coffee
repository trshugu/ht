gulp = require "gulp"
plumber = require "gulp-plumber"
gluppug = require "gulp-pug"
glupcoffee = require "gulp-coffee"
glupstylus = require "gulp-stylus"

pug = ->
  return gulp.src("src/*.pug")
    .pipe plumber()
    .pipe gluppug(pretty: true)
    .pipe gulp.dest("./")

coffee = ->
  return gulp.src("src/*.coffee")
    .pipe plumber()
    .pipe glupcoffee(pretty: true)
    .pipe gulp.dest("./")

stylus = ->
  return gulp.src("src/*.styl")
    .pipe plumber()
    .pipe glupstylus(pretty: true)
    .pipe gulp.dest("./")


watch =  ->
  gulp.watch "src/*.pug", gulp.parallel pug
  gulp.watch "src/*.coffee", gulp.parallel coffee
  gulp.watch "src/*.styl", gulp.parallel stylus

gulp.task 'build', ->
  gulp.run gulp.series "pug"
  gulp.run gulp.series "coffee"
  gulp.run gulp.series "stylus"

gulp.task "default", gulp.parallel watch
