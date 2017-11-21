// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('default', ['lib', 'bootstrap', 'sass-compile', 'script-compile', 'html-compile', 'watch', 'server']);

gulp.task('server', ['img-compress'], function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

// Compilando SASS para CSS
gulp.task('sass-compile', function(){
  gulp.src('./dev/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

// Copiando os Scripts
gulp.task('script-compile', function(){
  gulp.src('./dev/js/**/*.js')
  .pipe(gulp.dest('./dist/js'));
});

// Copiando o HTML
gulp.task('html-compile', function(){
  gulp.src('./dev/**/*.html')
  .pipe(gulp.dest('./dist'));
});

// Concatenando as lib's JS e colocando em um arquivo
gulp.task('lib', function(){
  return gulp.src(['./node_modules/angular/angular.min.js',
                   './node_modules/jquery/dist/jquery.min.js',
                   './node_modules/bootstrap/dist/js/bootstrap.min.js',
                   './node_modules/angular-route/angular-route.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./dist/lib'));
});

// Minificando, copiando e verificando se as imagens já estão minificadas no destino
gulp.task('img-compress', function(){
  return gulp.src('./dev/img/*.png')
  .pipe(changed('./dist/img'))
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'));
});

// Copiando os arquivos do Bootstrap
gulp.task('bootstrap', function(){
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
  .pipe(gulp.dest('./dist/css/bootstrap/css'));
  gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
  .pipe(gulp.dest('./dist/css/bootstrap/fonts'));
});

// Aguardando modificações nos arquivos
gulp.task('watch', function(){
  gulp.watch('./dev/sass/**/*.scss', ['sass-compile']).on('change', browserSync.reload);
  gulp.watch('./dev/**/*.html', ['html-compile']).on('change', browserSync.reload);
  gulp.watch('./dev/js/**/*.js', ['script-compile']).on('change', browserSync.reload);
});
