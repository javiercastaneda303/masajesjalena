const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html',
      hash: true
    }),
  ],
}