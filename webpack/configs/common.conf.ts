import * as rules from '../rules'
import * as plugins from '../plugins'
import {ROOT_DIR} from '../env';

export const CommonConfig = {
	module: {
		rules: [
			rules.javascriptRule,
			rules.typescriptRule,
			rules.htmlRule,
			rules.mediasRule,
			rules.svgRule,
			rules.cssRule,
			rules.faviconRule
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx'],
		alias: { 'react-dom': '@hot-loader/react-dom' },
		modules: [ROOT_DIR, 'node_modules'],
		plugins: [plugins.tsPaths]
	},
	plugins: [ plugins.tsPaths ]
}
