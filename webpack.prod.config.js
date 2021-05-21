const path = require('path');
const webpack = require('webpack');
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
const ignorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    removeComments: true,
    removeEmptyAttributes: true
  },
  hash: true
});


// webpack config
module.exports = {
  mode: 'production',
  entry: {
    app: {
      import: path.resolve(__dirname, 'src/game.ts'),
      dependOn: 'phaser'
    },
    phaser: 'phaser'
  },
  output: {
    path: path.resolve(__dirname, 'deploy'),
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
    ignorePlugin,
    htmlWebpackPlugin
  ]
}
