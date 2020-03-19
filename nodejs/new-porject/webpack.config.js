module.exports = {
    entry: './src/main.ts',
    module: 'development',
    output: {
        filename: 'dabao.js',
        path: __dirname + '/dist'
    },

    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loder' },
        ]
    }

}