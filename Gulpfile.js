var gulp;
var gutil;
var livescript;
var coffeescript;

gulp = require('gulp');
gutil = require('gulp-util');
livescript = require('gulp-livescript');
coffeescript = require('gulp-coffee');

var sources;

sources = {};

sources.livescript = '**/*.ls'
sources.coffeescript = '**/*.coffee'
sources.testsuite = 'test/*.js'

var compileLivescript;
var compileCoffeescript;
var mochaWithChai;

compileLivescript = function compileLivescript() {
  return gulp.src(sources.livescript)
    .pipe(livescript({bare: true}))
    .dest('.');
};

compileCoffeescript = function compileCoffeescript() {
  return gulp.src(sources.coffeescript)
    .pipe(coffeescript({bare: true}))
    .dest('.');
};

mochaWithChai = function mochaWithChai() {

};

gulp.task('livescript', compileLivescript);
gulp.task('coffeescript', compileCoffeescript);
gulp.task('test', mochaWithChai);

gulp.task('compile', ['livescript', 'coffeescript']);
gulp.task('default', ['compile', 'test']);
