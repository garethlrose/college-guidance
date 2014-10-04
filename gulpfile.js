var gulp = require('gulp');
var server = require('tiny-lr')();
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('dev', [], function(){
	return gulp.src('index.html')
		.pipe(gulp.dest('build/index.html'))
		.pipe(livereload(server));
});

gulp.task('watch', [], function(){
	connect.server({
		livereload: true
	});
	livereload.listen();
	watch('*.html', ['dev']).on('change', livereload.changed);
});

gulp.task('default', ['dev', 'watch']);

