const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
	dotenv: resolveApp('.env'),
	appBuild: resolveApp('build'),
	appPublic: resolveApp('public'),
	appIndexJs: resolveApp('src/index.ts'),
	appPackageJson: resolveApp('package.json'),
	appSrc: resolveApp('src'),
	appNodeModules: resolveApp('node_modules'),
    appTsConfig: resolveApp('tsconfig.json'),
    webpackConfig: resolveApp('config/webpack.config.dev.js')
};
