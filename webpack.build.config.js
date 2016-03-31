const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  styles: path.join(__dirname, 'styles'),
  public: path.join(__dirname, 'public'),
  node_modules: path.join(__dirname, 'node_modules')
};

module.exports = {
  entry: {
    src: path.join(PATHS.src, 'main.js')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(PATHS.public, 'js'),
    filename: 'bundle.js',
//    exclude: PATH.node_modules
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
      },
      {
        test: /\.scss$/,
        include: PATHS.styles,
        loader: ExtractTextPlugin.extract(
            //"style-loader", "css-loader!autoprefixer-loader!sass-loader"          
            "style-loader", "css-loader!sass-loader"          
            //'style-loader', 'css-loader!scss-loader'

//            'style', // backup loader when not building .css file
//            'css?sourceMap!sass?sourceMap' // loaders to preprocess CSS
            )
      }
    ]
  },
//  sassLoader: {
//    includePaths: [ PATHS.styles ]
//  },
  plugins: [
      new ExtractTextPlugin('main.css', 
          {allChunks: false}
      )
  ]
};

