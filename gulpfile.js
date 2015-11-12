'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');
var minifyCss = require('gulp-minify-css');
var $ = require('gulp-load-plugins')();

var config = {
	base:'app/',
  static:'app/static'
};

/* watch */
gulp.task('watch', function () {
	gulp.watch(config.static+'/sass/'+'*.scss', ['compass']);
	gulp.watch(config.base+'**/*.html', ['bs-reload']);
})

/* compass */
gulp.task('compass',  function(cb) {
	return gulp.src(config.static+'/sass/'+'*.scss')
		.pipe($.compass({
			sass: config.static+'/sass/',
      image:config.static+'/img/',
			css: config.static+'/css/'
		}))
		.pipe($.autoprefixer())
		.pipe(minifyCss())
    .pipe(gulp.dest(config.static+'/css/'))
		.pipe(browserSync.reload({stream: true}));
});

/* web server */
gulp.task('browser-sync', function () {
    browserSync({
        notify: false,
        logPrefix: '服务启动',
        server: {
            baseDir: config.base
        }
    })
})

/* 实时刷新 */
gulp.task('bs-reload', function () {
    browserSync.reload();
})

gulp.task('default', ['watch', 'browser-sync']);
