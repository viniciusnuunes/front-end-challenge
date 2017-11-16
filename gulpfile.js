// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('default', ['lib', 'sass-compile']);

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

// compilando sass para css
gulp.task('sass-compile', ['watch'], function(){
  gulp.src('./dev/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

// unificando as libs
gulp.task('lib', function(){
  return gulp.src(['./node_modules/angular/angular.min.js', './node_modules/jquery/dist/jquery.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./dist/lib'));
});

// aguardando modificações nos arquivos
gulp.task('watch', function(){
  gulp.watch('./dev/sass/main.scss', ['sass-compile']);
});
