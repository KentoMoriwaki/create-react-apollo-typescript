const path = require("path");

const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
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
