const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compila os arquivos SCSS em CSS minificado
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // Corrigido: usa gulp-sass corretamente
        .pipe(gulp.dest('./dist/css'));
}


// Exporta as tarefas corretamente
exports.default = gulp.parallel(styles);

// Observa mudanças nos arquivos SCSS
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', styles);
}