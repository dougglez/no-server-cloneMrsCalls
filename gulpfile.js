const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');


gulp.task('concat', function(){
  // gulp.src(['./source/home/homeService.js', 'moreFiles.js']);
  gulp.src(['./source/app.js', './source/**/*.js']) //go into directories inside of directories to find js files
  .pipe(concat('all.js'))
  
  .pipe(gulp.dest('./dist'));
});

//can make separate task for gulp-babel or put babel into this first task


// gulp.watch('./source/**/*.js', ['concat']);

//css
// grab reset css file first, and then fonts, and then everything else

gulp.task('sass', function() {
  // gulp.src(['./styles/reset.css', './styles/base.css', './styles/views/*.css'])
  gulp.src(['./styles/reset.css', './styles/*.css'])
  .pipe(concat('all.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});


// gulp.watch(['./source/**/*.js', './styles/views/*{.scss,.css}'],['concat']);

// gulp.task('default', ['concat', 'sass']);
