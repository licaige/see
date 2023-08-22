const chalkLog = require('chalk');
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const path = require('path');

const noCompPrefixFile = /(index|base)/;

const sass = gulpSass(dartSass);
const distFolder = './lib';

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        console.log(
          `${chalkLog.cyan(details.name)}: ${chalkLog.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalkLog.green(details.stats.minifiedSize / 1000)} KB`
        );
      })
    )
    .pipe(
      rename(path => {
        if (!noCompPrefixFile.test(path.basename)) {
          path.basename = `so-${path.basename}`;
        }
      })
    )
    .pipe(gulp.dest(distFolder));
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
  return gulp.src('./src/fonts/**').pipe(gulp.dest(`${distFolder}/fonts`));
}

/**
 * copy to packages/lib/theme-chalk
 */
function copyToLib() {
  return gulp
    .src(distFolder + '/**')
    .pipe(gulp.dest(path.resolve(__dirname, '../../lib/theme-chalk')));
}

const build = gulp.series(compile, copyFont, copyToLib);

exports.build = build;

exports.default = build;
