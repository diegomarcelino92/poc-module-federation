import { container } from 'webpack'

import * as path from 'path'

import { dependencies } from './package.json'
import { createConfig } from '../webpack.config'

const name = 'mfe2'

const config = createConfig({
  htmlPath: './public/index.html',
  outputPath: path.join(__dirname, '/dist'),
  entry: './src/index.ts',
  port: 3002,
  name
})

const federation = new container.ModuleFederationPlugin({
  name,
  filename: 'remote-entry.js',
  remotes: {
    shell: 'shell@http://localhost:3000/remote-entry.js',
    mfe3: 'mfe3@http://localhost:3003/remote-entry.js'
  },
  exposes: {
    './app': './src/app'
  },
  shared: {
    // 'styled-components': {
    //   singleton: true,
    //   requiredVersion: dependencies['styled-components']
    // },
    react: {
      singleton: true,
      requiredVersion: dependencies.react
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom']
    }
  }
})

config.plugins.push(federation)

export default config
