const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});
