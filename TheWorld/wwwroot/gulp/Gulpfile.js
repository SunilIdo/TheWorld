/// <binding ProjectOpened='sass:watch' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var minified = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var pathToProject = "wwwroot/";

gulp.task('sass', function () {
    gulp.src('wwwroot/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
    	outputStyle: 'compressed',
    	includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(pathToProject+'/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('wwwroot/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);