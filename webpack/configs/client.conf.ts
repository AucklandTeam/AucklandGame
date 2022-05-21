import { CommonConfig } from './common.conf'
import * as plugins from '../plugins'
import { DIST_DIR, IS_DEV, ROOT_DIR } from '../env'

const config = {
    name: 'client',
    target: 'web',
    devtool: IS_DEV ? 'eval-cheap-module-source-map' : 'source-map',
    context: ROOT_DIR,
    mode: IS_DEV ? 'development' : 'production',
    entry: [IS_DEV && 'webpack-hot-middleware/client?name=client', './src/client'].filter(Boolean),
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].client.js' : '[name].[hash].client.js',
        publicPath: '/'
    },
    ...CommonConfig,
    plugins: [
        plugins.definePlugin()
    ]
}

export default config
