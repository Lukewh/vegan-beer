const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');

const webpack = require('webpack-stream');

const normalize = require('node-normalize-scss').includePaths;
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

const compileSourcemaps = !process.argv.indexOf('--prod');

const sassOptions = {
  includePaths: [].concat(normalize, bourbon, neat),
  outputStyle: 'compressed'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions']
};

const paths = {
  sass: {
    src: './src/scss/**/*.scss',
    dest: './app/public/css'
  },
  js: {
    src: './src/js/app.js',
    dest: './app/public/js'
  }
};

gulp.task('sass', () => {
  gulp.src(paths.sass.src)
    .pipe(gulpif(compileSourcemaps, sourcemaps.init()))
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulpif(compileSourcemaps, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('js', () => {
  gulp.src(paths.js.src)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', () => {
  gulp.watch(paths.sass.src, ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('build', ['sass', 'js']);
gulp.task('dev', ['build', 'watch']);
gulp.task('default', ['build']);
