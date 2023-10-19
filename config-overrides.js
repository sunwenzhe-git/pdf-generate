const {
  override,
  addExternalBabelPlugin,
  useBabelRc,
} = require("customize-cra");

module.exports = {
  webpack: override(
    useBabelRc(),
    addExternalBabelPlugin("babel-plugin-transform-remove-strict-mode")
  ),
};
