const path = require("path");

const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true
    })
  ]
};
