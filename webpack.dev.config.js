const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// phaser path
const phaser = path.join(__dirname, '/node_modules/phaser/src/phaser.js');

// plugins instances
const cleanWebpackPlugin = new CleanWebpackPlugin();
const definePlugin = new webpack.DefinePlugin({
  WEBGL_RENDERER: true,
  CANVAS_RENDERER: true
});
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: '../index.html',
  minify: {
    removeAttributeQuotes: false,
    collapseWhitespace: false,
    html5: false,
    minifyCSS: false,
    minifyJS: false,
    minifyURLs: false,
    removeComments: false,
    removeEmptyAttributes: false
  },
  hash: false
});
const browserSyncPlugin = new BrowserSyncPlugin({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 3000,
  server: { baseDir: ['./', './build'] }
});


// webpack config
module.exports = {
  mode: 'development',
  devtool: 'eval', // 'cheap-source-map', 'eval-source-map', 'none'
  watch: true,
  entry: {
    app: {
      import: path.resolve(__dirname, 'src/game.ts'),
      dependOn: 'phaser'
    },
    phaser: 'phaser'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: './',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: { 'phaser': phaser }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    cleanWebpackPlugin,
    definePlugin,
    htmlWebpackPlugin,
    browserSyncPlugin
  ]
}