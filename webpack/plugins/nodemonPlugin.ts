import path from 'path';
const NodemonPlugin = require('nodemon-webpack-plugin');

export const nodemonPlugin = new NodemonPlugin({
    watch: path.resolve(__dirname, './dist'),
})
