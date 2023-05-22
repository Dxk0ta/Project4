const webpack = require('webpack');
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_KEY: JSON.stringify(process.env.API_KEY)
        }
      })
    ]
  }
};
