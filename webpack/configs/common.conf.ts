import path from 'path'
import * as rules from '../rules'
import * as plugins from '../plugins'

export const CommonConfig = {
	devServer: {
		open: false,
		host: 'localhost',
		port: '3000',
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
		alias: {
			client: path.resolve(__dirname, 'src/client/'),
			components: path.resolve(__dirname, 'src/client/components'),
			pages: path.resolve(__dirname, 'src/client/pages'),
			shared: path.resolve(__dirname, 'src/client/components/@shared'),
			assets: path.resolve(__dirname, 'src/client/assets/*'),
			styles: path.resolve(__dirname, 'src/client/styles'),
			core: path.resolve(__dirname, 'src/core')
		},
		modules: [path.resolve(__dirname, './'), 'node_modules']
	},
	plugins: [
		plugins.miniCssExtractPlugin,
		plugins.cleanWebpackPlugin,
		plugins.htmlWebpackPlugin,
	].filter(Boolean)
}
