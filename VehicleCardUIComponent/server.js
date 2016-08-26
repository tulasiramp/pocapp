import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import morgan from 'morgan'
import { config } from './lib/config'

var app = express();
var compiler = webpack(webpackConfig);

app.use(morgan('combined'))
app.use('/static', express.static(path.join(__dirname, 'build/public')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`);
})
