const gulp = require("gulp");
const browserSync = require('browser-sync').create();

gulp.task('hello', function() {
 	consol.log('Привет, мир!');
 	done();   // content
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});