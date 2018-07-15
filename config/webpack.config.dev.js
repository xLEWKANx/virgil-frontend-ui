'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';
// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';
// Get environment variables to inject into our app.

// Use svg in 'icons/' folder as React Component
const ICONS_SVG_REGEXP = /(icons\/.*\.svg$)/;

// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = {
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	// See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
	devtool: 'cheap-module-source-map',
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	// The first two entry points enable "hot" CSS and auto-refreshes for JS.
	entry: [
		// Include an alternative client for WebpackDevServer. A client's job is to
		// connect to WebpackDevServer by a socket and get notified about changes.
		// When you save a file, the client will either apply hot updates (in case
		// of CSS changes), or refresh the page (in case of JS changes). When you
		// make a syntax error, this client will display a syntax error overlay.
		// Note: instead of the default WebpackDevServer client, we use a custom one
		// to bring better experience for Create React App users. You can replace
		// the line below with these two lines if you prefer the stock client:
		// require.resolve('webpack-dev-server/client') + '?/',
		// require.resolve('webpack/hot/dev-server'),
		require.resolve('react-dev-utils/webpackHotDevClient'),
		// We ship a few polyfills by default:
		// require.resolve('./polyfills'),
		// Errors should be considered fatal in development
		require.resolve('react-error-overlay'),
		// Finally, this is your app's code:
		paths.appIndexJs
	],
	output: {
		// Next line is not used in dev but WebpackDevServer crashes without it:
		path: paths.appBuild,
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// This does not produce a real file. It's just the virtual path that is
		// served by WebpackDevServer in development. This is the JS bundle
		// containing code from all our entry points, and the Webpack runtime.
		filename: 'static/js/bundle.js',
		// There are also additional JS chunk files if you use code splitting.
		chunkFilename: 'static/js/[name].chunk.js',
		// This is the URL that app is served from. We use "/" in development.
		publicPath: publicPath,
		// Point sourcemap entries to original disk location (format as URL on Windows)
		// devtoolModuleFilenameTemplate: info =>
		//   path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
	},
	resolve: {
		// Next line is set to its default, but jest-webpack-alias crashes without it:
		modules: ["node_modules"],

		// Create aliases to import modules in "components/", "store/" and "lib" mote easily.
		alias: {
			components: path.join(paths.appSrc, 'components'),
			ui: path.join(paths.appSrc, 'ui'),
			store: path.join(paths.appSrc, 'store'),
			lib: path.join(paths.appSrc, 'lib'),
			assets: path.join(paths.appSrc, 'assets'),
			content: path.join(paths.appSrc, 'content'),
			services: path.join(paths.appSrc, 'services'),
		},
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
		plugins: [
			// Prevents users from importing files from outside of src/ (or node_modules/).
			// This often causes confusion because we only process files within src/ with babel.
			// To fix this, we prevent you from importing files out of src/ -- if you'd like to,
			// please link the files into your node_modules/ and let module-resolution kick in.
			// Make sure your source files are compiled, as they will not be processed in any way.
			new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
		]
	},
	module: {
		strictExportPresence: true,
		rules: [
			// First, run the linter.
			// It's important to do this before tsc processes the TS.
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
			// as a new entry in the `exclude` list for "file" loader.

			// "file" loader makes sure those assets get served by WebpackDevServer.
			// When you `import` an asset, you get its (virtual) filename.
			// In production, they would get copied to the `build` folder.
			{
				exclude: [
					/\.html$/,
					// We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
					// because you might change the hot reloading server from the custom one
					// to Webpack's built-in webpack-dev-server/client?/, which would not
					// get properly excluded by /\.(js|jsx)$/ because of the query string.
					// Webpack 2 fixes this, but for now we include this hack.
					// https://github.com/facebookincubator/create-react-app/issues/1713
					/\.(js|jsx)(\?.*)?$/,
					/\.(ts|tsx)(\?.*)?$/,
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
			// "url" loader works like "file" loader except that it embeds assets
			// smaller than specified limit in bytes as data URLs to avoid requests.
			// A missing `test` is equivalent to a match.
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
				include: path.appSrc,
				loader: require.resolve('ts-loader'),
			},
			// "postcss" loader applies autoprefixer to our CSS.
			// "css" loader resolves paths in CSS and adds assets as dependencies.
			// "style" loader turns CSS into JS modules that inject <style> tags.
			// In production, we use a plugin to extract that CSS to a file, but
			// in development "style" loader enables hot editing of CSS.
			{
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							camelCase: 'dashes'
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
				],
			},
			{
				test: ICONS_SVG_REGEXP,
				loader: 'svg-react-loader'
			}
			// ** STOP ** Are you adding a new loader?
			// Remember to add the new extension(s) to the "url" loader exclusion list.
		],
	},
	plugins: [
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
		new InterpolateHtmlPlugin(process.env),
		// Makes some environment variables available in index.html.
		// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In development, this will be an empty string.
		// new InterpolateHtmlPlugin(env.raw),
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new PreloadWebpackPlugin({
			rel: 'prefetch'
		}),
		// Add module names to factory functions so they appear in browser profiler.
		new webpack.NamedModulesPlugin(),
		// Makes some environment variables available to the JS code, for example:
		// if (process.env.NODE_ENV === 'development') { ... }.
		new webpack.DefinePlugin(JSON.stringify(process.env, null, 4)),
		// This is necessary to emit hot updates (currently CSS only):
		new webpack.HotModuleReplacementPlugin(),
		// Watcher doesn't work well if you mistype casing in a path so we use
		// a plugin that prints an error when you attempt to do this.
		// See https://github.com/facebookincubator/create-react-app/issues/240
		new CaseSensitivePathsPlugin(),
	],
	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	// TODO Do I need it?
	// node: {
	// 	dgram: 'empty',
	// 	fs: 'empty',
	// 	net: 'empty',
	// 	tls: 'empty',
	// },
	devServer: {
		// Enable gzip compression of generated files.
		compress: true,
		// Silence WebpackDevServer's own logs since they're generally not useful.
		// It will still show compile warnings and errors with this setting.
		clientLogLevel: 'none',
		// By default WebpackDevServer serves physical files from current directory
		// in addition to all the virtual build products that it serves from memory.
		// This is confusing because those files won’t automatically be available in
		// production build folder unless we copy them. However, copying the whole
		// project directory is dangerous because we may expose sensitive files.
		// Instead, we establish a convention that only files in `public` directory
		// get served. Our build script will copy `public` into the `build` folder.
		// In `index.html`, you can get URL of `public` folder with %PUBLIC_URL%:
		// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
		// In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
		// Note that we only recommend to use `public` folder as an escape hatch
		// for files like `favicon.ico`, `manifest.json`, and libraries that are
		// for some reason broken when imported through Webpack. If you just want to
		// use an image, put it in `src` and `import` it from JavaScript instead.
		contentBase: paths.appPublic,
		// By default files from `contentBase` will not trigger a page reload.
		watchContentBase: true,
		// Enable hot reloading server. It will provide /sockjs-node/ endpoint
		// for the WebpackDevServer client so it can learn when the files were
		// updated. The WebpackDevServer client is included as an entry point
		// in the Webpack development configuration. Note that only changes
		// to CSS are currently hot reloaded. JS changes will refresh the browser.
		hot: true,
		// It is important to tell WebpackDevServer to use the same "root" path
		// as we specified in the config. In development, we always serve from /.
		publicPath: publicPath,
		// WebpackDevServer is noisy by default so we emit custom message instead
		// by listening to the compiler events with `compiler.plugin` calls above.
		quiet: true,
		// Reportedly, this avoids CPU overload on some systems.
		// https://github.com/facebookincubator/create-react-app/issues/293
		watchOptions: {
			ignored: /node_modules/,
		},
		// Enable HTTPS if the HTTPS environment variable is set to 'true'
		https: protocol === 'https',
		host: host,
		overlay: false,
		historyApiFallback: {
			// Paths with dots should still use the history fallback.
			// See https://github.com/facebookincubator/create-react-app/issues/387.
			disableDotRule: true,
		},
		setup(app) {
			// This lets us open files from the runtime error overlay.
			app.use(errorOverlayMiddleware());
			// This service worker file is effectively a 'no-op' that will reset any
			// previous service worker registered for the same host:port combination.
			// We do this in development to avoid hitting the production cache if
			// it used the same host and port.
			// https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
			app.use(noopServiceWorkerMiddleware());
		},
	}
};
