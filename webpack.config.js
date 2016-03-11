var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var sassGlobals = require('./variables.json');
//var sassVars = JSON.stringify(sassGlobals);
var sassVars = 'variables.json';
//var sassVars = require('./variables.json');


function getEntrySources(sources){
  if(process.env.NODE_ENV !== 'production'){
  //  sources.push('webpack-dev-server/client?http://localhost:8080')
  //sources.push('webpack/hot/only-dev-server');
  sources.push('webpack-dev-server/client?http://localhost:8080');
  sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}

module.exports = {
entry: {
  helloWorld:getEntrySources(['./js/helloworld'])
},
output: {
   publicPath: 'http://localhost:8080/', // <-- New line!
  filename: 'public/bundle.js'
},
module: {
  loaders: [
    {
        test: /\.json$/,
        loader: 'json'
    },    
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      //include: /scss/,
      //loader: "style!css!sass!jsontosass?path="+ sassVars
      loaders: ['style', 'css', 'sass', 'jsontosass?path='+sassVars]
    //  loaders: ['style', 'css', 'sass']
      //loader: ExtractTextPlugin.extract('css!sass')

    }

  ]
}
/*,
plugins: [
  new ExtractTextPlugin('public/style.css',
  {
    allChunks: true
  })
]*/

};
