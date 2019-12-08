const {src, dest, watch} = require("gulp");
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass");

// Static server
function bs() {
	serverSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serverSass);
    watch("./sass/**/*.scss", serverSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serverSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;