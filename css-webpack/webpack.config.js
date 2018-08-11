const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        compress: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },{
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },{
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader", 
                "sass-loader" 
            ]
        }]
    }
}