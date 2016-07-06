
'use strict';

module.exports = {
    entry: './app.js',

    output: {
        path: __dirname,
        filename: 'build/bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ 'babel-loader?experimental' ]
            }
        ]
    }
};
