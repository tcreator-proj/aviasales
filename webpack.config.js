
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { type } = require('os');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8070,
  },
  output: {
    filename: "[name].build.js",
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },

      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(sass|css)$/,
        use: [{
          // вставить CSS на страницу
          loader: 'style-loader',
          // options: {
          //   injectType: "linkTag" 
          // }
        }, {
          // переводит CSS в модули CommonJS
          loader: 'css-loader'
        }, {
          // Выполнить действия postcss
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` требуется для postcss 8.x;
            // если Вы используете postcss 7.x пропустите ключ
            postcssOptions: {
              // плагины postcss, можно экспортировать в postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // компилирует Sass в CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
