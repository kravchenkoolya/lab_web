const mix = require('laravel-mix');
const { VueLoaderPlugin } = require('vue-loader');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .vue()
    .webpackConfig({
        plugins: [
            new VueLoaderPlugin()
        ]
    });
