let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public')
   .sass('resources/assets/sass/styles.scss','public/css/styles.css')
  	// .combine([
   //      'node_modules/animate.css/animate.css'
  	// 	], 'public/css/vendor.css')
   //   .js('vendor.js','resources/assets/js/build/vendor.js')
   //   .js([
   //      'build/vendor.js',
   //      './node_modules/jquery.easing/jquery.easing.js',
   //      './node_modules/waypoints/lib/jquery.waypoints.js',
   //      './node_modules/jquery-countto/jquery.countTo.js',
   //      './node_modules/skrollr/src/skrollr.js'
   //  	], 'public/js/vendor.js')
     .js('resources/assets/js/site.js','public/js/site.js')
     	.extract(['jquery', 'bootstrap-sass'])
    //  .browserSync({
    //     proxy: 'http://laravel-elixir-concept-op.dev'
    // })
    ;

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false // default
// });
