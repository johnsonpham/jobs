/*
  declare gulp modules
*/
var gulp             = require('gulp'),
	del              = require('del'),
	es               = require('event-stream'),
	gutil            = require('gulp-util'),
	templatecache    = require('gulp-angular-templatecache'),
	concat           = require('gulp-concat'),
	sourcemaps       = require('gulp-sourcemaps'),
	imagemin         = require('gulp-imagemin'),
	uglify           = require('gulp-uglify'),
	minifyHTML       = require('gulp-minify-html'),
	cleanCSS         = require('gulp-clean-css');
	autoprefixer     = require('gulp-autoprefixer'),
	rename           = require('gulp-rename'),
	processhtml      = require('gulp-processhtml');

/*
  declare global variables
*/
var basePath = 'src/main/resources',
	paths = {
	    "src": basePath + '/app',
	    "build": basePath + '/build',
	    "production": basePath + '/static'
	};

/*
	workflow : clean --> copy --> html process --> css process --> js process
*/

/*
  clean build folder
*/
gulp.task('clean', function() {
    return del([paths.build]);
});

/*clean end*/

/*
	copy folders: 
		templates 
		fonts
		images

*/
/*copy template*/
gulp.task('copy:templates', function() {
  return gulp.src([
            paths.src + '/templates/**/*'
        ])
        .pipe(gulp.dest(paths.build + '/templates'));
});
/*copy template end*/

/*copy fonts*/
gulp.task('copy:fonts', function() {
  return gulp.src([
            paths.src + '/fonts/**/*'
        ])
        .pipe(gulp.dest(paths.build + '/fonts'));
});
/*copy fonts end*/

/*copy images*/
gulp.task('copy:images', function() {
  return gulp.src([
      paths.src + '/assets/**/*'
    ])
    // .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.build + '/assets'));
});
/*copy images end*/

/* copy folders end */

/* process html */
/*index.html*/
gulp.task('html:index', function () {
	var opts = {

	};

    return gulp.src(paths.src + '/index.html')
               .pipe(processhtml(opts))
               .pipe(gulp.dest(paths.build));
});
/*index.html end*/
/* process html end */

/* process css files */

/* process css files end */


/*
  angular template cache
*/
gulp.task('script:angular-template', function () {
	var options = {
		module: 'softnetApp.templates',
		transformUrl: function(url) {
			return url.replace(/\.tpl\.html$/, '.html')
		},
		templateHeader: '!function (s) {try {s = angular.module("<%= module %>"<%= standalone %>) } catch (e) {s = angular.module("<%= module %>", []) } s.run(["$templateCache", function($templateCache) {',
		templateBody: '$templateCache.put("templates/<%= url %>","<%= contents %>");',
		templateFooter: '}])} ();'
	};

    return gulp.src([
    		paths.src + '/templates/**/*.html',
    	])
        .pipe(minifyHTML())
        .pipe(templatecache('app-templates.js', options))
        .pipe(gulp.dest(paths.src + '/js'));
});

/*
  concat js files
*/
gulp.task('script:vendor', function () {
    return gulp.src([
    		//libs
			paths.src + '/vendor/jquery/dist/jquery.min.js',
			paths.src + '/vendor/tether/dist/js/tether.min.js',
			paths.src + '/vendor/angular/angular.min.js',
			paths.src + '/vendor/angular/angular-animate.min.js',
			paths.src + '/vendor/angular/angular-aria.min.js',
			paths.src + '/vendor/angular/angular-cookies.min.js',
			paths.src + '/vendor/angular/angular-loader.min.js',
			paths.src + '/vendor/angular/angular-message-format.min.js',
			paths.src + '/vendor/angular/angular-messages.min.js',
			paths.src + '/vendor/angular/angular-resource.min.js',
			paths.src + '/vendor/angular/angular-route.min.js',
			paths.src + '/vendor/angular/angular-sanitize.min.js',
			paths.src + '/vendor/angular/angular-touch.min.js',

			paths.src + '/vendor/angular-ui-router/release/angular-ui-router.min.js',
			paths.src + '/vendor/angular-jwt/dist/angular-jwt.min.js',
			paths.src + '/vendor/angular-storage/dist/angular-storage.min.js',

			paths.src + '/vendor/bootstrap/dist/js/bootstrap.min.js',

			paths.src + '/vendor/bootstrap-switch/dist/js/bootstrap-switch.min.js',

			//datatable
			paths.src + '/vendor/datatable/media/js/jquery.dataTables.min.js',
			paths.src + '/vendor/datatable/media/js/dataTables.bootstrap4.min.js',
			paths.src + '/vendor/datatable/extensions/Responsive/js/dataTables.responsive.min.js',

			//angular datatable
			paths.src + '/vendor/angular-datatables/dist/angular-datatables.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js',
			paths.src + '/vendor/angular-datatables/dist/plugins/select/angular-datatables.select.min.js',

			//plugins
			paths.src + '/vendor/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
			paths.src + '/vendor/jquery-smk-Accordion/js/min/smk-accordion.min.js',
			paths.src + '/vendor/angular-spring-data-rest/dist/angular-spring-data-rest.min.js',
			paths.src + '/vendor/angular-modal-service/angular-modal-service.min.js',
			paths.src + '/vendor/jquery-fancyBox/source/jquery.fancybox.pack.js',
			paths.src + '/vendor/jquery-flexslider/jquery.flexslider-min.js',
			paths.src + '/vendor/angular-flexslider/angular-flexslider.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.build + '/js'));
});

gulp.task('script:app', function () {
    return gulp.src([
    		//global files
          	paths.src + '/js/app.js',
          	paths.src + '/js/config.js',
          	paths.src + '/js/routes.js',
          	paths.src + '/js/main.js',

          	//authentication
          	paths.src + '/js/shared/auth/auth.service.js',
          	paths.src + '/js/shared/auth/auth.controller.js',
          	paths.src + '/js/shared/auth/auth.config.js',
          	paths.src + '/js/shared/auth/auth.activate-account.controller.js',
          	paths.src + '/js/shared/auth/auth.forgot-pass-modal.controller.js',
          	paths.src + '/js/shared/auth/auth.login-modal.controller.js',
          	paths.src + '/js/shared/auth/auth.login.controller.js',
          	paths.src + '/js/shared/auth/auth.logout.controller.js',
          	paths.src + '/js/shared/auth/auth.signup-modal.controller.js',
          	paths.src + '/js/shared/auth/auth.send-activation-link-modal.controller.js',
          	paths.src + '/js/shared/auth/auth.config.js',

          	//common
          	paths.src + '/js/shared/common/accordion.directive.js',
          	paths.src + '/js/shared/common/datatable-wrapper.directive.js',
          	paths.src + '/js/shared/common/fancybox.directive.js',
          	paths.src + '/js/shared/common/include-replace.directive.js',
          	paths.src + '/js/shared/common/match.directive.js',
          	paths.src + '/js/shared/common/scroll-on-click.directive.js',
          	// paths.src + '/js/shared/common/sharethis.directive.js',
          	paths.src + '/js/shared/common/tooltip.directive.js',
          	paths.src + '/js/shared/common/confirm-modal.controller.js',

          	// services
          	paths.src + '/js/services/util.service.js',
          	paths.src + '/js/services/helper.service.js',
          	paths.src + '/js/services/users.service.js',
        
        	// homepage
        	paths.src + '/js/pages/home/home.controller.js',
        	paths.src + '/js/pages/home/slider.controller.js',
        	paths.src + '/js/pages/home/feedbacks.controller.js',
        	paths.src + '/js/pages/home/services.controller.js',

        	// career pages
        	paths.src + '/js/pages/careers/careers.service.js',
        	paths.src + '/js/pages/careers/careers.controller.js',
        	paths.src + '/js/pages/careers/career-buttons.controller.js',
        	paths.src + '/js/pages/careers/career-buttons.directive.js',
        	paths.src + '/js/pages/careers/career-links.controller.js',
        	paths.src + '/js/pages/careers/career-links.directive.js',
        	paths.src + '/js/pages/careers/careers-add-comments-modal.controller.js',
        	paths.src + '/js/pages/careers/careers-add-comments.controller.js',
        	paths.src + '/js/pages/careers/career-star-rating-modal-controller.js',
        	paths.src + '/js/pages/careers/career-star-rating.controller.js',
        	paths.src + '/js/pages/careers/career-star-rating.directive.js',
        	paths.src + '/js/pages/careers/careers-status.controller.js',
        	paths.src + '/js/pages/careers/careers-status.directive.js',
        	paths.src + '/js/pages/careers/careers-events.controller.js',
        	paths.src + '/js/pages/careers/careers-applicants.controller.js',
        	paths.src + '/js/pages/careers/careers-applicants.directive.js',

        	paths.src + '/js/pages/careers/career-edit-modal.controller.js',
        	paths.src + '/js/pages/careers/careers-toolbar.controller.js',
        	paths.src + '/js/pages/careers/careers-toolbar.directive.js',
        	paths.src + '/js/pages/careers/careers-child-table.directive.js'
        ])
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.build + '/js'));
});

gulp.task('minify-css', function() {
    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

/** Development watch */
/** ------------------------------------------------------------------------- */
gulp.task('watch', function() {

	// gulp.watch(paths.src + '/index.html', ['html:index']).on('change', function(file) {
        // gutil.log(gutil.colors.yellow.bold('index.html updated' + ' (' + file.path + ')'));
    // });

    gulp.watch(paths.src + '/templates/**/*.html', ['script:angular-template']).on('change', function(file) {
        gutil.log(gutil.colors.yellow.bold('HTML updated' + ' (' + file.path + ')'));
    });

    // gulp.watch(paths.src + '/css/**/*.css', []).on('change', function(file) {
        // gutil.log(gutil.colors.green.bold('css updated' + ' (' + file.path + ')'));
    // });

    // gulp.watch(paths.src + '/fonts/**/*', ['copy:fonts']).on('change', function(file) {
        // gutil.log(gutil.colors.green.bold('fonts updated' + ' (' + file.path + ')'));
    // });

    // gulp.watch(paths.src + '/assets/**/*', ['copy:images']).on('change', function(file) {
        // gutil.log(gutil.colors.green.bold('css updated' + ' (' + file.path + ')'));
    // });

    // gulp.watch(paths.src + '/templates/**/*', ['copy:templates']).on('change', function(file) {
        // gutil.log(gutil.colors.green.bold('templates updated' + ' (' + file.path + ')'));
    // });
});
// The default task (called when you run `gulp` from cli)
// gulp.task('default', ['watch', 'scripts', 'images']);

gulp.task('build', ['clean', 'scripts', 'copy:fonts', 'copy:templates', 'copy:images']);

gulp.task('scripts', ['css','script:angular-template', 'script:app', 'script:vendor']);

