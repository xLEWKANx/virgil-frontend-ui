'use strict';

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const paths = require('./paths');
const convertPathsToAliases = require('convert-tsconfig-paths-to-webpack-aliases').default;
const tsconfig = require('../tsconfig.json'); // all comments in tsconfig.json must be removed
const aliases = convertPathsToAliases(tsconfig);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (process.env.NODE_ENV !== 'production') {
	console.log(process.env.NODE_ENV);
	throw new Error('Production builds must have NODE_ENV=production.');
}

// Use svg in 'icons/' folder as React Component
const ICONS_SVG_REGEXP = /(icons\/.*\.svg$)/;

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
	mode: 'production',
	devtool: 'source-map',
	// Don't attempt to continue if there are any errors.
	bail: true,
	// We generate sourcemaps in production. This is slow but gives good results.
	// You can exclude the *.map files from the build during deployment.
	// In production, we only want to load the polyfills and the app code.
	entry: {
		'index': paths.appIndexJs,
		'index.min': paths.appIndexJs
	},
	output: {
		// The build folder.
		path: paths.appBuild,
		// Generated JS file names (with nested folders).
		// There will be one main bundle, and one file per asynchronous chunk.
		// We don't currently advertise code splitting but Webpack supports it.
		filename: './[name].js',
		libraryTarget: 'umd',
		umdNamedDefine: true,
    	globalObject: 'this'
	},
	resolve: {
		alias: aliases,
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
	},
	module: {
		strictExportPresence: true,
		rules: [
			// First, run the linter.
			// It's important to do this before Typescript runs.
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve('tslint-loader'),
				enforce: 'pre',
				include: paths.appSrc,
			},
			{
				test: /\.js$/,
				loader: require.resolve('source-map-loader'),
				enforce: 'pre',
				include: paths.appSrc,
			},
			// ** ADDING/UPDATING LOADERS **
			// The "file" loader handles all assets unless explicitly excluded.
			// The `exclude` list *must* be updated with every change to loader extensions.
			// When adding a new loader, you must add its `test`
			// as a new entry in the `exclude` list in the "file" loader.

			// "file" loader makes sure those assets end up in the `build` folder.
			// When you `import` an asset, you get its filename.
			{
				exclude: [
					/\.html$/,
					/\.(js|jsx)$/,
					/\.(ts|tsx)$/,
					/\.css$/,
					/\.json$/,
					/\.bmp$/,
					/\.gif$/,
					/\.jpe?g$/,
					/\.png$/,
					ICONS_SVG_REGEXP
				],
				loader: require.resolve('file-loader'),
				options: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			// "url" loader works just like "file" loader but it also embeds
			// assets smaller than specified size as data URLs to avoid requests.
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: require.resolve('url-loader'),
				options: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			// Compile .tsx?
			{
				test: /\.(ts|tsx)$/,
				include: paths.appSrc,
				loader: require.resolve('ts-loader')
			},
			// The notation here is somewhat confusing.
			// "postcss" loader applies autoprefixer to our CSS.
			// "css" loader resolves paths in CSS and adds assets as dependencies.
			// "style" loader normally turns CSS into JS modules injecting <style>,
			// but unlike in development configuration, we do something different.
			// `ExtractTextPlugin` first applies the "postcss" and "css" loaders
			// (second argument), then grabs the result CSS and puts it into a
			// separate file in our build process. This way we actually ship
			// a single CSS file in production instead of JS code injecting <style>
			// tags. If you use code splitting, however, any async bundles will still
			// use the "style" loader inside the async code so CSS from them won't be
			// in the main CSS file.
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							minimize: true,
							camelCase: 'dashes',
							sourceMap: true,
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							// Necessary for external CSS imports to work
							// https://github.com/facebookincubator/create-react-app/issues/2677
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								require('postcss-import')({
									path: paths.appSrc
								}),
								require('postcss-css-variables'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
							],
						},
					},
				]
			},
			{
				test: ICONS_SVG_REGEXP,
				loader: 'svg-react-loader'
			},
			// ** STOP ** Are you adding a new loader?
			// Remember to add the new extension(s) to the "file" loader exclusion list.
		],
	},
	plugins: [
		// // Makes some environment variables available in index.html.
		// // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// // In production, it will be an empty string unless you specify "homepage"
		// // in `package.json`, in which case it will be the pathname of that URL.
		// new InterpolateHtmlPlugin(env.raw),
		// Generates an `index.html` file with the <script> injected.
		// Makes some environment variables available to the JS code, for example:
		// if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
		// It is absolutely essential that NODE_ENV was set to production here.
		// Otherwise React will be compiled in the very slow development mode.
		new webpack.DefinePlugin(JSON.stringify(process.env), null, 4),
		// Minify the code.
		// Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
				parallel: true,
			})
		]
	}
};