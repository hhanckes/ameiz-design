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
var html = ['resources/index.html', 'resources/services.html', 'resources/services21.html' ];
mix.sass('resources/sass/app.scss', 'resources/css')
 //.js('resources/js/app.js', 'js')
  .options({processCssUrls: false})
  .sourceMaps(true, 'source-map')
  // .version();
  // .browserSync()
  .copy('resources/images', 'dist/images')
  .copy('resources/css', 'dist/css')
  .copy('resources/js', 'dist/js')
  .copy(html, 'dist');
