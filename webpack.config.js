var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var sassGlobals = require('./variables.json');
//var sassVars = JSON.stringify(sassGlobals);
//var sassVars = 'variables.json';
//var sassVars = require('./variables.json');



var scssToJson = require('scss-to-json');
var path = require('path');

var filePath = path.resolve(__dirname, 'colors.scss');
var colors = scssToJson(filePath);

var obj = JSON.stringify(colors)

console.log("---");
console.log(colors['$PrimaryColor']);

fs = require('fs');
fs.writeFile('helloworld.json', obj, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.json');
});



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
        loader: "json"
    },
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx', 'babel'],
      exclude: [/node_modules/, /testfolder/]
    },
    {
      test: /\.scss$/,
      include: /scss/,
      loaders: ['style', 'css', 'sass']
    //  loaders: ['style', 'css', 'sass']
      //loader: ExtractTextPlugin.extract('css!sass')

    }

  ]
}
,
resolve: {
/*  root: [
    path.resolve('src')

  ],*/
  modulesDirectories: ['node_modules'],
  extensions: ['', '.js', '.jsx']
},
node: {
    fs: "empty"
}
/*,
plugins: [
  new ExtractTextPlugin('public/style.css',
  {
    allChunks: true
  })
]*/

};
