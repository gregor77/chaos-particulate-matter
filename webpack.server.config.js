let webpack = require('webpack');
let path = require('path');
let fs = require('fs');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => {
        nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = {
    name: 'server',
    target: 'node',
    entry: "./server/js/server.js",
    output: {
        path: __dirname + '/dist',
        filename: "server.js"
    },
    node: {
        __dirname: true
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['node6']
                }
            },
            {test: /\.pug$/, loader: 'pug-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            // {
            //     test: /\.jpeg$/,
            //     loader: 'url-loader',
            //     options: {
            //         mimeType: 'image/jpeg'
            //     }
            // },
            // {
            //     test: /\.ttf$/,
            //     loader: 'name=fonts/Yangmalgumung.ttf',
            //     options: {
            //         mimeType: 'application/octet-stream'
            //     }
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'assets/error.html',
            template: './server/views/error.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'assets/index.html',
            template: './server/views/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'assets/layout.html',
            template: './server/views/layout.pug'
        })
    ]
};
