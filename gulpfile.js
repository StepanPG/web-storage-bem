'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./styles/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:w', function () {
    gulp.watch('./styles/*.scss', ['sass']);
});
