const path = require("path");

module.exports = {
  output: {
    // emit the bundle into the dist folder so index.html can load it
    path: path.resolve(__dirname, "dist"),
    filename: "[name].pack.js",
  },
  entry: {
    index: "./index",
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"],
          },
        },
        exclude: /node_modules/,
        test: /\.js$/,
      },
    ],
  },
};
