const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const toModulePath = (...parts) => path.resolve(__dirname, 'src', ...parts)

const MODULE_RESOLVE = {
    alias: {
        components: toModulePath('components'),
        containers: toModulePath('containers'),
        context: toModulePath('context'),
        pages: toModulePath('pages'),

        hooks: toModulePath('hooks'),
        models: toModulePath('models'),
        utils: toModulePath('utils'),
        constants: toModulePath('constants'),

        queries: toModulePath('queries'),
        fragments: toModulePath('fragments'),
        mutations: toModulePath('mutations'),

        assets: toModulePath('assets'),
        themes: toModulePath('themes'),

        tests: toModulePath('tests'),
        'react-dom': '@hot-loader/react-dom',
    }
}

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        ...MODULE_RESOLVE,
        extensions: ['.ts', '.tsx', '.js', '.json', '.cjs'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
            {
                test: /\.(graphql|gql)$/i,
                exclude: /node_modules/,
                resolve: {
                    ...MODULE_RESOLVE,
                    extensions: ['.gql', '.graphql']
                },
                use: ['graphql-tag/loader']
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.ico'
        }),
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            APP_NAME: JSON.stringify(process.env.npm_package_name),
            APP_VERSION: JSON.stringify(process.env.npm_package_version)
        })
    ],
}