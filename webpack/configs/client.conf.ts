import { CommonConfig } from './common.conf'
import * as plugins from '../plugins'
import {DIST_DIR, ROOT_DIR, SRC_DIR, IS_DEV} from '../env';
import path from 'path'

const config = {
    name: 'client',
    devtool: 'source-map',
    context: ROOT_DIR,
    entry: {
        'main': (
        [IS_DEV && 'react-hot-loader/patch',
        path.join(SRC_DIR, 'client')
        ].filter(Boolean)),
        'service-worker': path.join(SRC_DIR, 'service-worker.js')},
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.definePlugin()
    ]
}

export default config
