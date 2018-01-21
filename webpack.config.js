const path = require('path');

module.exports = {
    entry: {
        index: './js/index.js',
    },
    output: {
        path: __dirname + '/bundle',
        filename: '[name]-bundle.js',
        library: 'www',
    },
    watch: true,
    devtool: 'cheap-source-map',

    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
}