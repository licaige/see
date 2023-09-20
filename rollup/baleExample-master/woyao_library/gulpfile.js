const gulp = require('gulp')
const clean = require('gulp-clean')
const replace = require('gulp-replace')
const rename = require('gulp-rename')

const dir = 'es/'
const fileName = 'index.js'
const tempFileName = fileName + '_copy'

// rollup tree shaking 无法直接处理 Class 模块
// Rollup tree shaking 只处理函数和顶层 import / export导入的变量
// 需要gulp再次处理
gulp.task('replace', function () {
    return gulp
        .src(dir + fileName)
        .pipe(replace('/** @class **/', '/** @class */ /*#__PURE__*/'))
        .pipe(rename(tempFileName))
        .pipe(gulp.dest(dir))
})

// 临时文件覆盖原有文件
gulp.task('rename', function () {
    return gulp
        .src(dir + tempFileName)
        .pipe(rename(fileName))
        .pipe(gulp.dest(dir))
})

// 删除临时文件
gulp.task('del', function () {
    return gulp.src(dir + tempFileName).pipe(clean())
})

// 对typescript编译后对class增加PURE 完善对tree shaking支持
gulp.task('default', gulp.series('replace', 'rename', 'del'))
