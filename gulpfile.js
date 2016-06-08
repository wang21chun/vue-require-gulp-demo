var gulp = require('gulp'),
    del = require('del')
watch = require('gulp-watch'),
    webpack = require('gulp-webpack'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    amdOptimize = require("amd-optimize"),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    rjs = require('gulp-requirejs');


var config = {
    base: './', // 当前文件所在目录
    src: './resources/', // 所有开发资源目录
    dist: './dist/', // 开发环境生成的静态资源--dev版本
    html: './views/'
};

// concat:js
gulp.task('concat:js', ['libjs:copy'], function() {
    return gulp.src([
            config.src,
        ])
        .pipe(amdOptimize("App", {
            baseUrl: config.src,
            paths: {
                Vue: 'lib/vue/dist/vue',
                VueRouter: 'lib/vue-router/dist/vue-router',
                Utile:'js/utile/utile',
                jquery:'lib/jquery.min',
                App: 'js/main/main',
                Index: 'js/index/index',
                indexHeadHtml: 'html/index/indexHead.html',
                indexPageHtml: 'html/index/indexPage.html',
                indexListHtml: 'html/index/indexList.html'
            }
        }))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(config.dist + 'js/'));
});

gulp.task('deploy:js', ['concat:js'], function() {
    return gulp.src([config.src + config.dist + '**/*.js'])
        .pipe(uglify())
        /*.pipe(rename({
            suffix: '.min'
        }))*/
        .pipe(gulp.dest(config.dist));
});

gulp.task('deploy:css', ['concat:css'], function() {
    return gulp.src([config.src + config.dist + '**/*.css'])
        .pipe(minifycss())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('concat:css', ['img:copy'], function() {
    return gulp.src([
            config.src + 'css/**/*.css'
        ])
        .pipe(concat('css_all.css'))
        //   .pipe(minifycss())
        .pipe(gulp.dest(config.dist + 'css/'));
});

gulp.task('img:copy', function() {
    gulp.src([
            config.src + 'css/**/*.png'
        ])
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.dist + 'css/'));

         gulp.src([
            config.src + 'css/images/*'
        ])
        .pipe(gulp.dest(config.dist+"images/"));
});

gulp.task('libjs:copy', function() {
    return gulp.src([
            config.src + 'lib/requirejs/require.js',
            config.src + 'lib/text/text.js',
            config.src + 'lib/require-css/css.js',
            config.src + 'lib/jquery.min.js',
            config.src + 'js/require.config.js'
        ])
        .pipe(gulp.dest(config.dist + 'js/'));
});


// clean
gulp.task('clean', function() {
    del([config.dist]);
});

gulp.task('reload', ['concat:js', 'concat:css'], function() {
    return gulp.src(config.html + '/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch([config.src + '**/*', config.html + '**/*'], ['reload']);
})

gulp.task('connect', function() {
    connect.server({
        root: ['views', './', 'resources'],
        port: 8080,
        host: 'localhost',
        livereload: true
    });
});
// default
gulp.task('default', ['connect', 'watch']);
gulp.task('css-js', ['concat:js', 'concat:css', 'libjs:copy']);
gulp.task('deploy', ['clean', 'deploy:css', 'deploy:js']);
