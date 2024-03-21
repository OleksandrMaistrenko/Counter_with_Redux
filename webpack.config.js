// const HtmlPlugin = require("html-webpack-plugin");
// const CssPlugin = require("mini-css-extract-plugin");
// const path = require("path");

// module.exports = {
//   entry: "./client/src/index.js",
//   mode: "production",
//   oninput: {
//     path: path.resolve(__dirname, "build"),
//     filename: "bundle[fullhash].js",
//     clean: true,
//   },
//   plugins: [
//     new HtmlPlugin({
//       template: "./client/src/index.html",
//     }),
//     new CssPlugin({ filename: "styles[fullhash].css" }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/present-env"],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [CssPlugin.loader, "css-loader"],
//       },
//     ],
//   },
//   devServer: {
//     port: 5455,
//     static: {
//       directory: path.join(__dirname, "build"),
//     },
//     devMiddleware: {
//       writeToDisk: true,
//     },
//   },
// };

const HtmlPlugin = require("html-webpack-plugin");
const CssPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./client/src/index.html",
    }),
    new CssPlugin({ filename: "styles.[fullhash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Corrected spelling here
          },
        },
      },
      {
        test: /\.css$/,
        use: [CssPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    port: 5455,
    static: {
      directory: path.join(__dirname, "build"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
