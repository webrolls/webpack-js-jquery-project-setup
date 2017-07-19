# webpack-javascript-project-setup
Setup using webpack-dev-server and babel

This is a sample javascript boilerplate project. 
If you are looking to setup simple plain Javascript project using 
<ul>
<li> webpack, webpack-dev-server </li> 
<li> babel for ES6 </li>  
</ul>

To get started, you can copy or clone this repository or follow the following steps
<ol>
create root project folder 'webpack-javascript-project-setup'
cd webpack-javascript-project-setup
<li>npm init </li>
install webpack and webpack-dev-server
<li>npm install --save-dev webpack webpack-dev-server </li>
<li>add webpack.config.js under project root folder in our case it 'webpack-javascript-project-setup' </li>

<pre>
const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('./build/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
</pre>
<li>Install Babel
<li>npm install --save-dev babel-loader babel-core
<li>npm install --save-dev babel-preset-es2015

check if .babelrc file is not created, you have to manually create it.

{
  "presets": ["es2015"]
}

8. Install jQuery

npm install --save jquery

now lets add some code


<li> </li>
<li> </li>
<ol>
This initial setup of this project was done using following blog
https://medium.com/@paooolino/a-modern-javascript-project-setup-b7842955d1d3
