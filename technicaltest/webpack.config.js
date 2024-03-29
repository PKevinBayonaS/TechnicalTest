var HTMLwebpackPlugin : require('html-webpack-plugin');
var HTMLwebpackPluginConfig : new HTMLwebpackPlugin({
template: __dirname + '/public/index.html',
filename: 'index.html',
inject: 'body'
});
meduLe.exports = {
entry: __dirname '/src/index.js',
module: {
loaders:[{
test: /\.js$/,
exclude: /node_modules/,
loader: 'babel-loader'
}]
},
output: {
filename: 'transformed.js',
path: __dirname + '/build'
},
plugins:[HTMLwebpackPluginConfig]
};
