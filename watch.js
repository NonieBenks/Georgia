module.exports = function() {
    $.gulp.task('watch',function(){
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'));
        $.gulp.watch('build/static/scss/**/*.scss',$.gulp.series('sass'))
    })
}