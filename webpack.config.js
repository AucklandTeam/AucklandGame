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
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
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
                use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader'],
            },

            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
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
