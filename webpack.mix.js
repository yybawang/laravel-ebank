let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'js')
	.sass('resources/assets/sass/app.scss', 'css')
	.extract(['vue','vue-router','vue-datepicker-local','axios'])
	// .version()
	// .sourceMaps()
;
mix.setPublicPath('public/dist').setResourceRoot('/dist/');
mix.webpackConfig({
	output : {
		publicPath: 'dist/',
	}
});