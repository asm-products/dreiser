var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


gulp.task('stylus:compile', function() {
	gulp.src('styl/app.styl')
		.pipe(stylus({
			use: [nib()],
			paths: ['styl'],
			urlfunc: 'url',
			'include css': true,
			compress: true
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('../resources/public/css/'));
});


gulp.task('concat:dist', function() {
	gulp.src(['js/jquery.js', 'js/nprogress.js'])
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../resources/public/js/'))
});

gulp.task('watch', function() {
	var tasks = ['stylus:compile'];
	gulp.watch(['styl/*.styl', 'styl/foundation/*.styl', 'js/*.js'], tasks);
});

gulp.task('build', ['stylus:compile', 'concat:dist']);