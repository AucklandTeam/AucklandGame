import path from 'path'
import { CommonConfig } from './common.conf'
import { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'
import * as plugins from '../plugins'
import { IS_DEV, DIST_DIR, SRC_DIR } from '../env'

const config: Configuration = {
    name: 'server',
    mode: IS_DEV ? 'development' : 'production',
    //target: 'node',
    externalsPresets: { node: true },
    node: { __dirname: false },
    devtool: 'source-map',
    entry: path.join(SRC_DIR, 'server'),
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.miniCssExtractPlugin,
        plugins.nodemonPlugin,
        plugins.definePlugin({ server: true })
    ],
    externals: [nodeExternals({allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i], importType: 'commonjs'})],
    optimization: { nodeEnv: false }
}

export default config
