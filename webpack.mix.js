const mix = require("laravel-mix");

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
if (mix.inProduction()) {
    mix.version();
}
mix.sourceMaps()
    .js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/app-dark.scss", "public/css")
    .sass("resources/sass/app-rtl.scss", "public/css")
    .options({
        processCssUrls: false
    });


let config = {
    output: {
        publicPath: '/',
        //chunkFilename: 'js/chunks/[name].[chunkhash].js',     // production
        chunkFilename: 'js/chunks/[name].js',                   // development
    },
};

if (mix.config.inProduction) {
    // Overwrite naming structure for production
    config.output.chunkFilename = 'js/chunks/[name].[chunkhash].js';     // production

} else {
    // Enable sourcemaps
    mix.webpackConfig({ devtool: 'source-map' }).sourceMaps();
}

mix.webpackConfig(config);