const gulp = require('gulp');
const utilities = require('gulp-util');
const del = require('del');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// Added for typescript gulping
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

// Build tasks
gulp.task('tsClean', function(){
  return del(['app/*.js', 'app/*.js.map']);
});

gulp.task('ts', ['tsClean'], shell.task([
  'tsc'
]));

gulp.task('sassBuild', function() {
  return gulp.src(['resources/styles/*'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('resources/styles'));
});

// Run dev server with build dependencies
gulp.task('default', ['ts', 'sassBuild'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*/*.html'], ['htmlBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
  gulp.watch(['resources/styles/*/*.css', 'resources/styles/*/*.scss'], ['cssBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
  gulp.watch(['app/*.ts'], ['tsBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
});

gulp.task('htmlBuild', function(){
  browserSync.reload();
});

gulp.task('cssBuild', ['sassBuild'], function(){
  browserSync.reload();
});

gulp.task('tsBuild', ['ts'], function(){
  browserSync.reload();
});

gulp.task('prodBuild:serve', function() {
  browserSync.init({
    server: {
      baseDir: "public",
      index: "index.html"
    }
  });
});

// Production Build tasks - as of 6/7/16 the clean task must be run first, it is having an async fail issue with the images - needs to be rewritten to handle that scenario and be part of the full prodBuild task - Jason Awbrey
gulp.task('clean', function () {
  return del('public/*');
});
gulp.task('prodBuild:sass', function(){
  return gulp
    .src(['resources/styles/*'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/resources/styles'));
});
gulp.task('prodBuild:img', function(){
  return gulp.src(['resources/img/*']).pipe(gulp.dest('public/resources/img'));
});
gulp.task('prodBuild:index', function(){
  return gulp.src(['index.html']).pipe(gulp.dest('public'));
});
gulp.task('prodBuild:components', ['ts'], function () {
  return gulp.src(['app/*.js', 'app/*.html']).pipe(gulp.dest('public/app'));
});
gulp.task('prodBuild:libs', function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/angular2/bundles/http.dev.js'
    ])
    .pipe(gulp.dest('public/lib'));
});
gulp.task('prodBuild', ['prodBuild:sass', 'prodBuild:img', 'prodBuild:components', 'prodBuild:libs', 'prodBuild:index']);
