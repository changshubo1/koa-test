const path = require('path');

module.exports = {
    mode: process
        .argv
        .includes('--dev')
        ? 'development'
        : 'production',
    entry: {
        page1: './src/index.js',
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js"]
    },



    module: {

    },
};
