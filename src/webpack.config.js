var path = require('path');

module.exports = {
  output:{
    jsonpFunction: 'codepenCallback'
  },
  resolve:{
    root: [
      path.resolve(__dirname)
    ],
    modulesDirectories: [
      'node_modules',
      'lib'
    ],
    extensions: ['', '.js', '.json', '.html']
  },
  module:{
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib|vendor)/, // 排除
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.dot$/,
        loader: 'dot-loader'
      },{
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?minimize", "sass"]
      }
    ]
  },
  resolveLoader: {
    root: path.resolve(__dirname, '../node_modules')
  }
};

