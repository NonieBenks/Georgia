module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('build/static/scss/style.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                browsers:['last 10 versions']
            }))
            .on("error", $.gp.notify.onError({
                title: "style"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}