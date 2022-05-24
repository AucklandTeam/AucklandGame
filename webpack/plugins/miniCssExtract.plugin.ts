import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IS_DEV } from '../env'

const config = {
	filename: IS_DEV ? 'css/[name].css' : 'css/[name].[hash:base64:5].css'
}

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config)
