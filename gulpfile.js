// Load plugins
var gulp = require('gulp'),
//sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
//cssnano = require('gulp-cssnano'),
//jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
//imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
//cache = require('gulp-cache'),
    del = require('del');


// Scripts
gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        //.pipe(jshint('.jshintrc'))
        //.pipe(jshint.reporter('default'))
        .pipe(concat('script.js'))
        //.pipe(gulp.dest('bin'))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('bin'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function() {
    return del(['bin/script.js']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('scripts');
});