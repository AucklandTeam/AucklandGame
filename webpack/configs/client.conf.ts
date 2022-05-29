import { CommonConfig } from './common.conf'
import * as plugins from '../plugins'
import {DIST_DIR, ROOT_DIR, SRC_DIR, IS_DEV} from '../env';
import path from 'path'

const config = {
    name: 'client',
    devtool: 'source-map',
    context: ROOT_DIR,
    entry: ([
        IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client'),
    ].filter(Boolean)),
    output: {
        path: DIST_DIR,
        filename: 'client.js',
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.definePlugin()
    ]
}

export default config
