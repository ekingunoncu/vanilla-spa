const isProd = process.env.NODE_ENV === 'production',
    {resolve} = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require("copy-webpack-plugin");

const config = {

    devtool: false,

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vanilla',
            template: resolve(__dirname, '..', 'index.ejs'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: resolve(__dirname, '..'),
                    from: resolve(__dirname, '..', 'main', 'asset'),
                    to: resolve(__dirname, '..', '..', 'dist')
                }
            ],
        })
    ],

    entry: {
        // Main entry point of our app
        index: [resolve(__dirname, '..', 'index.js')]
    },

    output: {
        // As mentioned before, built files are stored in dist
        path: resolve(__dirname, '..', '..', 'dist'),

        // In our case we serve asset directly from root
        publicPath: '/',

        // We add hash to filename to avoid caching issues
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['*', '.js'],
        modules: [
            resolve(__dirname, '..', '..', 'node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',

                // Dependencies do not require transpilation
                exclude: /node_modules/
            },
            {
                test: /\.(s[ac]ss|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'sass-loader'
                ],
            },
        ],
    },
}

if (!isProd) {
    config.devServer = {
        contentBase: resolve(__dirname, '..', 'main'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    }
}

module.exports = config
