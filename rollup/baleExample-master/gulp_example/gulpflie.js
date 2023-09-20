const gulp = require('gulp')
const clean = require('gulp-clean')
const ts = require('gulp-typescript')
const replace = require('gulp-replace')
const less = require('gulp-less')
const merge = require('merge2')
const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
})

const esDir = 'es'

gulp.task('clean', function () {
    return gulp.src(esDir, { allowEmpty: true, read: false }).pipe(clean())
})

gulp.task('less', function () {
    return gulp
        .src(['src/**/*.less'], {
            ignore: ['src/style/mixins/**/*', 'src/style/mixins.less']
        })
        .pipe(replace(/(@import))(.*style.)less(':)/g, '$1 (css) $2less$3'))
        .pipe(less())
        .pipe(replace(/styles\.less/g, 'style.css'))
        .pipe(gulp.dest(esDir))
})

gulp.task('copy', function () {
    return gulp
        .src(
            [
                'src/**/*.less',
                'src/**/*.png',
                'src/**/*.jpg',
                'src/**/*.jpeg',
                'src/**/*.gif',
            ],
            {
                ignore: 'src/**/demo/**'
            }
        )
        .pipe(gulp.dest(esDir))
})

gulp.task('js', function () {
    var tsResult = tsProject.src().pipe(tsProject())

    return merge([
        tsResult.dts.pipe(gulp.dest(esDir)),
        tsResult.js.pipe(gulp.dest(esDir)),
    ])
})

gulp.task('default', gulp.series('clean', 'copy', 'less', 'js'))
