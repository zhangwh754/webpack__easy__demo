const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [postcssPresetEnv(/* pluginOptions */)],
}
