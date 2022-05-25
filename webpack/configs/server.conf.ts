import { CommonConfig } from './common.conf'
import { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'
import * as plugins from '../plugins'
import { DIST_DIR, IS_DEV, ROOT_DIR } from '../env'

const config: Configuration = {
    name: 'server',
    target: 'node',
    devtool: IS_DEV ? false : 'source-map',
    entry: './server.js',
    mode: IS_DEV ? 'development' : 'production',
    context: ROOT_DIR,
    output: {
        filename: 'server.cjs',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.cleanWebpackPlugin,
        plugins.nodemonPlugin,
        plugins.definePlugin({ server: true })
    ],
    externals: [nodeExternals()]
}

export default config
