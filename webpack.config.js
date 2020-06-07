const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 50,
              },
              webp: {
                quality: 10,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    contentBase: path.resolve(__dirname, 'dist'),
    // enable HMR on the devServer
    hot: true,
    // match the output 'publicPath'
    publicPath: '/dist/',
    // fallback to root for other urls
    historyApiFallback: true,

    inline: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
  },
};