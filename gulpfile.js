var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass'),
  spritesmith = require('gulp.spritesmith'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps');



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
    destination: 'dev/js'
  }
};



gulp.task('jade-compile', function () {

  gulp.src('dev/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dev'))
});


gulp.task('sass-compile', function () {
  gulp.src(paths.scss.location)
    .pipe(sourcemaps.init())
      .pipe(concat('main.scss'))
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dev/css'));
});


gulp.task('concat', function () {
  return gulp.src(paths.js.location)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dev/js'));
});


// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    port: 7777,
    server: {
      baseDir: "dev"
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
  gulp.watch('dev/js/**/*.js', ['concat']);
  gulp.watch([
    'dev/**/*.html',
    'dev/css/**/*.css',
    'dev/js/**/*.js'
  ]).on("change", browserSync.reload);
});

gulp.task('default', [
  'jade-compile',
  'sass-compile',
  'browser-sync',
  'sprite',
  'concat',
  'watch'

]);