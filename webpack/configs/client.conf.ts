import { CommonConfig } from './common.conf'
import * as plugins from '../plugins'
import {DIST_DIR, IS_DEV, PUB_DIR, ROOT_DIR} from '../env';

const config = {
    name: 'client',
    devtool: 'source-map',
    context: ROOT_DIR,
    mode: IS_DEV ? 'development' : 'production',
    entry: './src/client.tsx',
    output: {
        path: PUB_DIR,
        filename: 'client.js',
        publicPath: '/'
    },
    devServer: {
        open: false,
        host: 'localhost',
        port: '4000',
        historyApiFallback: true,
        magicHtml: true
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.cleanWebpackPlugin,
        //plugins.htmlWebpackPlugin,
        plugins.definePlugin()
    ]
}

export default config
