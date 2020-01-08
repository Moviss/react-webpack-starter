const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevMode = true;

var config = {
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")()],
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = (env, options) => {
  return config;
};
