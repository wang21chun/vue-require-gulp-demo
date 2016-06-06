var gulp = require('gulp'),
    watch = require('gulp-watch'),
    webpack = require('gulp-webpack'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    amdOptimize = require("amd-optimize"),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rjs = require('gulp-requirejs');

var config = {
    base: './', // 当前文件所在目录
    src: './resources/', // 所有开发资源目录
    dist: './dist/', // 开发环境生成的静态资源--dev版本
    html: './views/',
    splitting: './src/splitting/' // 静态资源版本号map
};

// concat:js
gulp.task('concat:js', function() {
    return gulp.src([
            config.src,
        ])
        .pipe(amdOptimize("App", {
            baseUrl: config.src,
            paths: {
                Vue: 'lib/vue/dist/vue',
                VueRouter: 'lib/vue-router/dist/vue-router',
                App: 'js/main/main',
                Index: 'js/index/index',
                Html: 'html/index/index.html'
            },
        }))
        .pipe(concat('lib.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(config.src + config.dist + 'js/'));
});

/*gulp.task('concat:rjs', function() {
    rjs({
            baseUrl: config.src,
            out: 'lib.js',
            name: 'js/main/main',
            paths: {
                Vue: 'lib/vue/dist/vue',
                VueRouter: 'lib/vue-router/dist/vue-router',
                App: 'js/main/main',
                Index: 'js/index/index',
                Html: 'html/index/index.html',
                'Css-all': 'dist/css/css_all'
            },
            map: {
                '*': {
                    'css': 'lib/require-css/css',
                    'text': 'lib/text/text'
                }
            },

        })
        .pipe(gulp.dest(config.src + config.dist + 'js/'));
});
*/



gulp.task('concat:css', function() {
    return gulp.src([
            config.src + 'css/**/*.css'
        ])
        .pipe(concat('css_all.css'))
        //   .pipe(minifycss())
        .pipe(gulp.dest(config.src + config.dist + 'css/'));
});

// clean
gulp.task('clean', function() {
    del([config.dist]);
});

gulp.task('reload', function() {
    return gulp.src(config.html + '/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch([config.src + '**/*', config.html + '**/*'], ['concat:js', 'concat:css', 'reload']);
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
gulp.task('css-js', ['concat:js', 'concat:css']);
