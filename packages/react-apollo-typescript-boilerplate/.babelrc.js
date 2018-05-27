const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        // targets: {} // See "browserslist" in package.json
        modules: false,
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-stage-3",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: ["react-hot-loader/babel"]
};

module.exports = config;
