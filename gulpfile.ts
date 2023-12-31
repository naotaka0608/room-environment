const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const configured_typescript = typescript.createProject("server_tsconfig.json");

gulp.task('compile', () => {
	return gulp.src([
		'controllers/**/*.ts',
		'models/**/*.ts',
		'app.ts',
		'routes/**/*.ts',
	], {base: './'})
		.pipe(sourcemaps.init())
		.pipe(configured_typescript())
		.js
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));
});

gulp.task('build', () => {

	return gulp.src([
		'bin/www',
		'build/*.ico',
		'build/*.png',
		'build/*.txt',
		'build/*.json',
		'build/**/*.js',
		'build/**/*.css',
		'build/**/*.html',
		'build/**/*.svg',
		'build/images/**/*.*',
		'build/iconfont/**/*.*',
		'build/favicon/**/*.*',
		'controllers/**/*.js',
		'models/**/*.js',
		'routes/**/*.js',
		'views/**/*.jade',
		'app.js',
		'package.json',
		'package-lock.json',
	], {base: './', allowEmpty: true})
		.pipe(gulp.dest('product'));
});


gulp.task('default', gulp.series('compile', 'build'), () => {

});
