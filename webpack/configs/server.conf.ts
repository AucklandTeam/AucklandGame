import { CommonConfig } from './common.conf'
import nodeExternals from 'webpack-node-externals'
import * as plugins from '../plugins'
import { DIST_DIR, IS_DEV, ROOT_DIR } from '../env'

const config = {
    name: 'server',
    target: 'node',
    devtool: IS_DEV ? false : 'source-map',
    entry: './src/client/components/@shared/app',
    mode: IS_DEV ? 'development' : 'production',
    context: ROOT_DIR,
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.nodemonPlugin,
        plugins.definePlugin({ server: true })
    ],
    externals: [nodeExternals()]
}

export default config
