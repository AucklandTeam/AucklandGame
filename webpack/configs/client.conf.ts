import { CommonConfig } from './common.conf'
import * as plugins from '../plugins'
import { DIST_DIR, IS_DEV, ROOT_DIR } from '../env'

const config = {
    name: 'client',
    devtool: 'source-map',
    context: ROOT_DIR,
    mode: IS_DEV ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].client.js' : '[name].[hash].client.js',
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.cleanWebpackPlugin,
        plugins.htmlWebpackPlugin,
        plugins.tsPaths,
        plugins.definePlugin()
    ]
}

export default config
