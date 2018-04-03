const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: ["./source/js/index.js"],
    output: {
        path: __dirname + "/public_html",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};
