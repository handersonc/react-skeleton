const {merge} = require("webpack-merge")
const path = require("path")
const common = require("./webpack.common.js")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4002,
    compress: true,
    https: false,
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 4003,
      openAnalyzer: false
    })
  ]
})