const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
 
// webpack configuration V V V file from:  https://digitalfortress.tech/debug/how-to-use-webpack-analyzer-bundle/ 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const lastDirName = path.basename(__dirname);
const dropPath = path.join(__dirname, 'temp', 'stats');
// webpack configuration ^ ^ ^

module.exports = {
  mode: 'development', // switch to production when you package for production - impacts final size of package you import
  target: 'web',
  entry: {
    fpsJSFunctions: path.resolve(__dirname, 'src/indexes/index.ts')  // myServices is the name of the library - external reference name:  myServices.js
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",  // [name] Comes from entry
    publicPath: "/assets/",
    library: { type: "amd" },  // Used by SPFx
    clean: true
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.tsx|.ts?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
          },
        },
      ]
    },
    {
      test: /\.svg/,
      type: 'asset/resource'
    }]
  },
  externals: { // Read webpack documentation - do not want to bundle these into the package
    // "react": "React",
    // "lodash-es": "lodash-es/*"
  },
  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    static: {
      directory: resolveAppPath('app'),
      publicPath: '/',
    },
  },
  // webpack configuration V V V file from:  https://digitalfortress.tech/debug/how-to-use-webpack-analyzer-bundle/ 
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
      generateStatsFile: true,
      statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
      logLevel: 'error'
    }),
  ]
  // webpack configuration ^ ^ ^
};