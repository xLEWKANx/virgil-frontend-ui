const paths = require('./paths');

module.exports = (ctx) => ({
    plugins: [
        require('postcss-modules')({
            getJSON: ctx.extractModules || (() => {}),
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-import')({
            path: paths.appSrc
        }),
        require('postcss-css-variables'),
        require('autoprefixer')({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
        }),
    ]
  })