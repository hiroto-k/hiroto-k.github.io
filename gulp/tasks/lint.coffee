gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("lint", ["lint:es"])

gulp.task "lint:es", ->
  gulp.src(config.src.babel)
    .pipe($.plumber())
    .pipe($.eslint(config.options.eslint))
    .pipe($.eslint.formatEach("compact", process.stderr))
