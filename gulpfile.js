var gulp = require('gulp');

var addStream = require('add-stream');
var angularTemplatecache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var header = require('gulp-header');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var bower = require('./bower.json');
var banner = ['/**',
    ' * <%= bower.name %> - <%= bower.description %>',
    ' * @version v<%= bower.version %>',
    ' * @link <%= bower.homepage %>',
    ' * @license <%= bower.license %>',
    ' */',
    ''].join('\n');

function prepareTemplates() {
    return gulp.src('./src/*.html')
        //.pipe(minify and preprocess the template html here)
        .pipe(angularTemplatecache({
            module: 'schemaForm',
            root: 'directives/decorators/bootstrap/nwp-components/'
        }));
}

gulp.task('build-app-dev', function() {
    return gulp.src('./src/schema-form-components.js')
        //.pipe(concat your app js files somehow)
        .pipe(sourcemaps.init())

        // append the template js onto one file
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('schema-form-components.js'))

        .pipe(sourcemaps.write())
        .pipe(header(banner, { bower : bower } ))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build-app-prod', function() {
    return gulp.src('./src/schema-form-components.js')
        //.pipe(concat your app js files somehow)

        // append the template js onto one file
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('schema-form-components.min.js'))

        .pipe(uglify())
        .pipe(header(banner, { bower : bower } ))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build-app-dev', 'build-app-prod']);
