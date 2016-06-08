var fs=require("fs");
var path=require("path");
var webpack=require("webpack");

//console.log(path);

function getViews(){
	var viewDir=path.join(__dirname,"src","views");
	var files=fs.readdirSync(viewDir);
	var views={};
	files.forEach(e=>{
		if (e.endsWith(".ejs")){
			views[path.join("views",e.slice(0,-4))]=path.join(viewDir,e);
		}
	});
	console.log(views);
	return views;
}
//getViews();

module.exports = {
  devtool: "source-map",
  entry: getViews(),
  output: {
    path: path.join(__dirname, "dest/"),
    publicPath: "dist/js/",
    filename: "[name].js"
  },
  module: {
    loaders: [
		{test: /\.ejs$/, loader: 'ejs-compiled'}
      // { test: /\.css$/, loader: "style-loader!css-loader"},
      // { test: /\.less$/, loader: "style-loader!csss-loader!less-loader"}
    ]
  },
  resolve: {},
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
	  _: "underscore"
    }),
    new webpack.optimize.CommonsChunkPlugin(path.join("public","common.js"))
  ]
};

