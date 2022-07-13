const { addBabelPlugins, override } = require('customize-cra')
module.exports = override(
  ...addBabelPlugins(
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    'transform-decorators-legacy'
  )
)
