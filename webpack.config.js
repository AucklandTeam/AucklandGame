const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: { localIdentName: '[name]_[local]__[hash:base64:5]' },
        sourceMap: true,
    },
};

const postCSSLoader = {
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
};

const config = {
    entry: {
        'bundle': './src/index.tsx',
        'service-worker': './src/service-worker.js',
        'server': './server/server.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    devServer: {
        open: false,
        host: 'localhost',
        port: '3000',
        historyApiFallback: true,
        magicHtml: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader'],
            },

            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        modules: [ path.resolve(__dirname, './'), 'node_modules' ],
        fallback: {
            'fs': false,
            'tls': false,
            'net': false,
            'path': false,
            'zlib': false,
            'http': false,
            'https': false,
            'stream': false,
            'crypto': false,
            'querystring': false,
            'url': false,
            'util': false,
            'buffer': false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './www/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }

    return config;
};
