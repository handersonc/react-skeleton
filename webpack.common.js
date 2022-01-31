const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require("webpack")
const path = require("path")

const toModulePath = (...parts) => path.resolve(__dirname, 'src', ...parts)

const MODULE_RESOLVE = {
    alias: {
      assets: toModulePath('assets'),
      components: toModulePath('components'),
      models: toModulePath('models'),
      containers: toModulePath('containers'),
      context: toModulePath('context'),
      constants: toModulePath('constants'),
      fragments: toModulePath('fragments'),
      hooks: toModulePath('hooks'),
      images: toModulePath('images'),
      mutations: toModulePath('mutations'),
      pages: toModulePath('pages'),
      queries: toModulePath('queries'),
      'react-dom': '@hot-loader/react-dom',
      resolvers: toModulePath('resolvers'),
      schema: toModulePath('schema'),
      styles: toModulePath('styles'),
      theme: toModulePath('theme'),
      utils: toModulePath('utils')
    }
  }

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        ...MODULE_RESOLVE,
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            APP_NAME: JSON.stringify(process.env.npm_package_name),
            APP_VERSION: JSON.stringify(process.env.npm_package_version)
        })
    ],
}