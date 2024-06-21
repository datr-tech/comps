const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "projectReferences": true
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'comps.js',
        path: path.resolve(__dirname, 'dist'),
    },
};