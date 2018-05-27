const path = require("path");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "bundle.js",
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
  }
};
