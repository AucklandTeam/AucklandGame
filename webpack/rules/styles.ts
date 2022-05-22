import { resolve } from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { SRC_DIR } from '../env'
import autoprefixer from 'autoprefixer';


export const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: { localIdentName: '[name]_[local]__[hash:base64:5]' },
		sourceMap: true,
	},
}
export const postCssLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: true,
		postcssOptions: {
			ident: 'postcss',
			plugins: [
				require('postcss-flexbugs-fixes'),
				autoprefixer({
					overrideBrowserslist: [
						'>1%',
						'last 4 versions',
						'Firefox ESR',
						'not ie < 9', // React doesn't support IE8 anyway
					],
					flexbox: 'no-2009',
				}),
				require('postcss-modules-values'),
			],
		},
	},
}

export const cssLoader = {
	loader: 'css-loader'
}


export const miniCssExtractLoader = {
	loader: MiniCssExtractPlugin.loader
}

export const sassLoader = {
	loader: 'sass-loader',
	options: {
		sassOptions: {
			includePaths: [resolve(SRC_DIR, 'client/styles')]
		}
	}
}

export const cssRule = {
	test: /\.(sa|sc|c)ss$/,
	use: [
		miniCssExtractLoader,
		CSSModuleLoader,
		postCssLoader,
		sassLoader
	]
}
