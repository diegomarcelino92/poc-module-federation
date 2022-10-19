import { container } from 'webpack'
import * as path from 'path'

import { dependencies } from './package.json'
import { createConfig } from '../webpack.config'

const name = 'shell'

const config = createConfig({
  outputPath: path.join(__dirname, '/dist'),
  htmlPath: './public/index.html',
  entry: './src/index.ts',
  port: 3000,
  name
})

const federation = new container.ModuleFederationPlugin({
  name,
  filename: 'remote-entry.js',
  remotes: {
    mfe1: 'mfe1@http://localhost:3001/remote-entry.js',
    mfe2: 'mfe2@http://localhost:3002/remote-entry.js'
  },
  exposes: {
    './store': './src/store',
    './app': './src/app'
  },
  shared: {
    'styled-components': {
      singleton: true,
      requiredVersion: dependencies['styled-components']
    },
    react: {
      singleton: true,
      requiredVersion: dependencies.react
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom']
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom']
    }
  }
})

config.plugins.push(federation)

export default config
