import * as rules from '../rules'
import * as plugins from '../plugins'
import {ROOT_DIR} from '../env';

export const CommonConfig = {
	devServer: {
		open: false,
		host: 'localhost',
		port: '4000',
		historyApiFallback: true,
		magicHtml: true
	},
	module: {
		rules: [
			rules.javascriptRule,
			rules.typescriptRule,
			rules.htmlRule,
			rules.mediasRule,
			rules.fontsRule,
			rules.cssRule
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx'],
		modules: [ROOT_DIR, 'node_modules'],
		plugins: [plugins.tsPaths]
	}
}
