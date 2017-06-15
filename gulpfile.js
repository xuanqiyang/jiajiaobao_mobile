// 引入 gulp及组件
var gulp = require('gulp'), //基础库
    imagemin = require('gulp-imagemin'), //图片压缩
    sass = require('gulp-sass'), //sass
    minifycss = require('gulp-minify-css'), //css压缩
    jshint = require('gulp-jshint'), //js检查
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'), //清空文件夹
    plumber = require("gulp-plumber"),
    browserSync = require('browser-sync').create();

var reload = browserSync.reload;

gulp.task('server', function() {
    browserSync.init({
        // proxy:'http://localhost:3000/index.html',
        server: {
            baseDir: 'dist/'
        }
    });
});

//HTML处理
gulp.task('html', function() {
    var htmlSrc = 'src/**/*.html',
        htmlDst = 'dist';

    gulp.src(htmlSrc)
        .pipe(plumber())
        .pipe(gulp.dest('dist'))
        .pipe(reload({ stream: true }));
});
    // 样式处理
gulp.task('sass', function() {
    var cssSrc = 'src/scss/*',
        cssDst = 'dist/css';

    gulp.src(cssSrc)
        .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst))
        .pipe(reload({ stream: true }));
});

// 图片处理
gulp.task('images', function() {
    var imgSrc = 'src/images/**',
        imgDst = 'dist/images';
    gulp.src(imgSrc)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
        .pipe(reload({ stream: true }));
})

// js处理
gulp.task('js', function() {
    var jsSrc = 'src/js/**/*.js',
        jsDst = 'dist/js';

    gulp.src(jsSrc)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(concat('main.js'))
        // .pipe(gulp.dest(jsDst))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst))
        .pipe(reload({ stream: true }));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['dist/images', 'dist/css', 'dist/js'], { read: false })
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean' ,'server'], function() {
    gulp.start('images', 'html', 'sass','js', 'watch');
});
// 监听任务 运行语句 gulp watch
gulp.task('watch', function() {
    // 监听images
    gulp.watch('src/images/**', function() {
        gulp.run('images');
    }).on("change", reload);
    // 监听html
    gulp.watch('src/**/*.html', function(event) {
        gulp.run('html');
    }).on("change", reload);
    // 监听css
    gulp.watch('src/scss/*', function() {
        gulp.run('sass');
    }).on("change", reload);
    // 监听js
    gulp.watch('src/js/*.js', function() {
        gulp.run('js');
    }).on("change", reload);

});
