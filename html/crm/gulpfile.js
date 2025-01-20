"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Gulp Modules !-->
<--!----------------------------------------------------------------!-->
*/
const { src, dest, series, parallel, watch } = require("gulp");
//const lodash = require("lodash");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
//const rtlcss = require("gulp-rtlcss");
const jsonmin = require("gulp-jsonmin");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const mergeStream = require("merge-stream");
const beautify = require("gulp-jsbeautifier");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

/*
<--!----------------------------------------------------------------!-->
<--! Clean !-->
<--!----------------------------------------------------------------!-->
*/
function cleanInit() {
	return src("dist/", { read: false, allowEmpty: true })
		.pipe(clean({ force: true }))
		.pipe(dest("dist/"));
}

/*
<--!----------------------------------------------------------------!-->
<--! HTML !-->
<--!----------------------------------------------------------------!-->
*/
function htmlInit() {
	return src("src/**/*.html")
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
				indent: true,
			})
		)
		.pipe(beautify())
		.pipe(beautify.validate())
		.pipe(beautify.reporter())
		.pipe(dest("dist/"));
}

/*
<--!----------------------------------------------------------------!-->
<--! Bootstrap SCSS !-->
<--!----------------------------------------------------------------!-->
*/
function bootstrapSCSSInit() {
	var requiredBootstrapSCSS = ["src/assets/scss/bootstrap/bootstrap.scss"];
	const bootstrapSCSSStreamInit = src(requiredBootstrapSCSS)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/css/"));
	return mergeStream(bootstrapSCSSStreamInit);
}

/*
<--!----------------------------------------------------------------!-->
<--! Custom SCSS !-->
<--!----------------------------------------------------------------!-->
*/
function customSCSSInit() {
	var requiredCustomSCSS = ["src/assets/scss/theme.scss"];
	const customSCSSStreamInit = src(requiredCustomSCSS)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/css/"));
	return mergeStream(customSCSSStreamInit);
}

/*
<--!----------------------------------------------------------------!-->
<--! Images !-->
<--!----------------------------------------------------------------!-->
*/
function imagesInit() {
	// required theme images
	var requiredThemeImages = ["src/assets/images/**/*"];
	const themeImageInit = src(requiredThemeImages).pipe(dest("dist/assets/images/"));
	// merge-stream
	return mergeStream(themeImageInit);
}

/*
<--!----------------------------------------------------------------!-->
<--! JS !-->
<--!----------------------------------------------------------------!-->
*/
function jsInit() {
	// required theme js
	var requiredThemeJS = ["src/assets/js/**/*.js"];
	const jsThemeInit = src(requiredThemeJS)
		.pipe(rename({ suffix: ".min" }))
		.pipe(uglify())
		.pipe(dest("dist/assets/js/"));

	// merge-stream
	return mergeStream(jsThemeInit);
}

/*
<--!----------------------------------------------------------------!-->
<--! Vendors !-->
<--!----------------------------------------------------------------!-->
*/
function vendorsInit() {
	// vendors required css
	var vendorsCSSassets = ["src/assets/vendors/css/animate.css", "src/assets/vendors/css/bsicon.css", "src/assets/vendors/css/feather.css", "src/assets/vendors/css/fontawesome.css", "src/assets/vendors/css/flagicon.css", "src/assets/vendors/css/sweetalert2.css"];
	const vendorsCSS = src(vendorsCSSassets)
		.pipe(sourcemaps.init())
		.pipe(rename({ suffix: ".min" }))
		.pipe(cleanCSS())
		.pipe(concat("vendors.min.css"))
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/vendors/css/"));
	// vendors required js
	var vendorsJSassets = ["src/assets/vendors/js/jquery.js", "src/assets/vendors/js/jquery-ui.js", "src/assets/vendors/js/moment.js", "src/assets/vendors/js/pace.js", "src/assets/vendors/js/nxlNavigation.js", "src/assets/vendors/js/bootstrap.js", "src/assets/vendors/js/perfect-scrollbar.js", "src/assets/vendors/js/full-screen-helper.js", "src/assets/vendors/js/sweetalert2.js"];
	const vendorsJS = src(vendorsJSassets)
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat("vendors.min.js"))
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/vendors/js/"));
	// vendors required css copy
	var vendorsCSSassetsCopy = ["src/assets/vendors/css/**/*"];
	const vendorsCSSCopy = src(vendorsCSSassetsCopy)
		.pipe(sourcemaps.init())
		.pipe(rename({ suffix: ".min" }))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/vendors/css/"));
	// vendors required js
	var vendorsJSassetsCopy = ["src/assets/vendors/js/**/*"];
	const vendorsJSCopy = src(vendorsJSassetsCopy)
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write("./"))
		.pipe(dest("dist/assets/vendors/js/"));
	// vendors required img
	var vendorsIMGassets = ["src/assets/vendors/img/**/*.+(png|jpg|gif|svg)"];
	const vendorsIMG = src(vendorsIMGassets).pipe(dest("dist/assets/vendors/img/"));
	// vendors required fonts
	var vendorsFONTassets = ["src/assets/vendors/fonts/*.+(eot|svg|ttf|woff|woff2)"];
	const vendorsFont = src(vendorsFONTassets).pipe(dest("dist/assets/vendors/fonts/"));
	// merge-stream
	return mergeStream(vendorsCSS, vendorsJS, vendorsCSSCopy, vendorsJSCopy, vendorsIMG, vendorsFont);
}

/*
<--!----------------------------------------------------------------!-->
<--! BrowserSync !-->
<--!----------------------------------------------------------------!-->
*/
function browserSyncInit(done) {
	browserSync.init({
		server: {
			baseDir: "dist/",
		},
	});
	done();
}
function reloadSyncInit(done) {
	browserSync.reload();
	done();
}

/*
<--!----------------------------------------------------------------!-->
<--! Watch !-->
<--!----------------------------------------------------------------!-->
*/
function watchInit() {
	watch("src/templates/**/*", series(htmlInit, reloadSyncInit)); // watch HTML template files
	watch("src/assets/scss/bootstrap/**/*", series(bootstrapSCSSInit, reloadSyncInit)); // watch bootstrap SCSS files
	watch("src/assets/scss/themes/**/*", series(customSCSSInit, reloadSyncInit)); // watch custom SCSS files
	watch("src/assets/images/**/*", series(imagesInit, reloadSyncInit)); // watch images files
	watch("src/assets/js/**/*", series(jsInit, reloadSyncInit)); // watch js files
	watch("src/assets/vendors/**/*", series(vendorsInit, reloadSyncInit)); // watch vendors files
}

/*
<--!----------------------------------------------------------------!-->
<--! Run Default {cmd:gulp} !-->
<--!----------------------------------------------------------------!-->
*/
exports.default = series(cleanInit, series(htmlInit, bootstrapSCSSInit, customSCSSInit, imagesInit, jsInit, vendorsInit, parallel(watchInit, browserSyncInit)));
