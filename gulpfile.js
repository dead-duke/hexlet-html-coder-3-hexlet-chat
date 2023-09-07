const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => src('./app/scss/**/*.scss')
  .pipe(sass())
  .pipe(dest('./build/css/'));

const builsPug = () => src('./app/pug/**/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(dest('./build/'));

exports.default = parallel(buildSass, builsPug);
