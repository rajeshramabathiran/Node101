const gulp = require('gulp');
const ts = require('gulp-typescript');
const swagger = ['src/swagger/swagger.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('swagger', function() {
  return gulp.src(swagger)
  .pipe(gulp.dest('dist/swagger'));
});

gulp.task('default', ['scripts', 'swagger']);
