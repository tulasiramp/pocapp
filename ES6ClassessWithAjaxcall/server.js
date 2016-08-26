var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var path = require('path')
var morgan = require('morgan')

var app = express()
var port = process.env.PORT || 3000

app.use(morgan('combined'))
app.use('/static', express.static(path.join(__dirname, 'build/public')));

var compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
})
