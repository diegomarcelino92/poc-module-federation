import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const { MFLiveReloadPlugin } = require('@module-federation/fmr')

interface WebpackConfigInput {
  outputPath: string
  htmlPath: string
  entry: string
  port: number
  name: string
}

type WebpackConfig = Configuration & { devServer?: any }

export const createConfig = (config: WebpackConfigInput): WebpackConfig => ({
  entry: config.entry,
  output: {
    path: config.outputPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js']
  },
  devServer: {
    historyApiFallback: true,
    port: config.port,
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: config.port,
      container: config.name
    }),
    new HtmlWebpackPlugin({
      template: config.htmlPath,
      inject: true,
      publicPath: '/'
    })
  ]
})
