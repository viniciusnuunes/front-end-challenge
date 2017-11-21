// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('default', ['server', 'lib', 'bootstrap', 'sass-compile', 'script-compile', 'html-compile', 'watch']);

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

// compilando sass para css
gulp.task('sass-compile', function(){
  gulp.src('./dev/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

// passando os scripts para o dist
gulp.task('script-compile', function(){
  gulp.src('./dev/js/**/*.js')
  .pipe(gulp.dest('./dist/js'));
});

/* passando o html para o dist */
gulp.task('html-compile', function(){
  gulp.src('./dev/index.html')
  .pipe(gulp.dest('./dist'));
});

// concatenando as libs
gulp.task('lib', function(){
  return gulp.src(['./node_modules/angular/angular.min.js',
                   './node_modules/jquery/dist/jquery.min.js',
                   './node_modules/bootstrap/dist/js/bootstrap.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./dist/lib'));
});

gulp.task('bootstrap', function(){
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
  .pipe(gulp.dest('./dist/css/bootstrap/css'));
  gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
  .pipe(gulp.dest('./dist/css/bootstrap/fonts'));
});

// aguardando modificações nos arquivos
gulp.task('watch', function(){
  gulp.watch('./dev/sass/**/*.scss', ['sass-compile']).on('change', browserSync.reload);
  gulp.watch('./dev/index.html', ['html-compile']).on('change', browserSync.reload);
  gulp.watch('./dev/js/**/*.js', ['script-compile']).on('change', browserSync.reload);
});
