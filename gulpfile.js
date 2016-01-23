var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass'),
  spritesmith = require('gulp.spritesmith'),
  browserSync = require('browser-sync').create();



var paths = {
  scss: {
    location: [
      'bower_components/normalize-scss/normalize.scss',
      'dev/scss/main.scss'
    ]
  },
  js: {
    location: [
      'bower_components/jquery/dist/jquery.js',
      'dev/js/main.js'
    ],
    destination: 'prod/js'
  }
};




gulp.task('jade-compile', function () {

  gulp.src('dev/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('prod'))
});


gulp.task('sass-compile', function () {
  gulp.src(paths.scss.location)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('prod/css'));
});


// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "prod"
    }
  });
});


gulp.task('sprite', function() {
  var spriteData = gulp.src('dev/img/icons/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: 'sprite.scss'
    }));
  spriteData.img.pipe(gulp.dest('dev/img'));
spriteData.css.pipe(gulp.dest('dev/scss'))
});



gulp.task('watch', function () {

  gulp.watch('dev/jade/*.jade', ['jade-compile']);
  gulp.watch('dev/scss/**/*.scss', ['sass-compile']);
  gulp.watch([
    'prod/**/*.html',
    'prod/css/**/*.css',
    'prod/js/**/*.js'
  ]).on("change", browserSync.reload);
});

gulp.task('default', [
  'jade-compile',
  'sass-compile',
  'browser-sync',
  'sprite',
  'watch'

]);