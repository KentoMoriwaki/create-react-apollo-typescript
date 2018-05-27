const path = require("path");
const serve = require("webpack-serve");

const config = require(path.resolve(__dirname, `../webpack.config.js`));

serve({ config });
