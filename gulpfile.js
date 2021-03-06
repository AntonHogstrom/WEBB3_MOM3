//Gulp Methods installed from NPM packages
const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const htmlMin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const sourceMap = require('gulp-sourcemaps');
const imageMin = require('gulp-imagemin');
const webp = require('gulp-webp');
const sass = require('gulp-sass')(require('sass'));

//src directories, targets all html, all css in scss folder, all js in js folder and everything in img folder.
//img folder should only contain images...
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imgPath: "src/img/*",
    sassPath: "src/sass/**.scss"
}

//HTML-task, returns HTML-files from files.htmlPath and copy them over to destination pub (folder)
function copyHTML() { 
    return src(files.htmlPath)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest('pub'));
}

//JS-task, initiates sourcemap, contatinate, minify JS-files, writes out sourcemap file, push files to pub (folder).
function jsTask() {
    return src(files.jsPath)
    .pipe(sourceMap.init())
        .pipe(concat('main.js'))
        .pipe(terser())
    .pipe(sourceMap.write('../maps'))
    .pipe(dest('pub/js'));
}

//SASS-task, returns the main sass-file, initiates sourcemap, cancatinates(for rename), compiles sass to css, compress, log errors, write sourcemap, send file to pub/css, update browser on css changes. 
function sassTask() {
    return src(files.sassPath)
        .pipe(sourceMap.init())
        .pipe(concat('main.css'))
        .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(sourceMap.write('../maps'))
        .pipe(dest("pub/css"))
        .pipe(browserSync.stream());
}

//IMG-task, returns images, optimizes, sends to pub/img.
function imgTask() {
    return src(files.imgPath)
    .pipe(imageMin())
    .pipe(dest('pub/img'))
}

//WEBP-task, returns images, optimizes, sends to pub/img/webp
function webpTask() {
    return src(files.imgPath)
    .pipe(webp())
    .pipe(dest('pub/img/webp'));
}

//Watch-task, Initiates browserSync on pub folder. Watch file-paths seperately, reload on update.
//only updated files are reloaded
function watchTask() {

    browserSync.init({
        server: "./pub"
    });

    watch(files.jsPath, jsTask).on('change', browserSync.reload);
    watch(files.htmlPath, copyHTML).on('change', browserSync.reload);
    watch(files.sassPath, sassTask).on('change', browserSync.reload);
    watch(files.imgPath, imgTask).on('change', browserSync.reload);
    watch(files.imgPath, webpTask).on('change', browserSync.reload);
}



//gulp default exports.
exports.default = series(
    parallel(copyHTML, jsTask, sassTask, imgTask, webpTask),
    watchTask
);