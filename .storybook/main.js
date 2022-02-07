const custom = require('../webpack.common.js');
const { merge } = require("webpack-merge")

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-material-ui5'
  ],
  webpackFinal: async config => {
    return merge(config, {
      module: custom.module,
      resolve: custom.resolve
    });
  },
  core: {
    builder: "webpack5"
  },
  staticDirs: [{ from: '../src/assets', to: 'assets' }],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
    emotionAlias: false,
    babelModeV7: true,
  },
}