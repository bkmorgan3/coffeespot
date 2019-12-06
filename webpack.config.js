const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
   devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 8080,
    publicPath: '/build/',
    proxy: {
        '/api': {
            target: 'http://localhost:3000'
        }
    }
   },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /(css|scss)$/,
                use: [
                    //Creates style nodesfrom JS strings
                    'style-loader', 
                    // Translates CSS into CommonJS
                    'css-loader', 
                    // sass-loader
                    'sass-loader'
                ]

            }
        ]
    }   
}