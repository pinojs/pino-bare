require('bare-process/global')

const Worker = require('bare-worker', { with: { imports: './imports.json' } })
const { resolve } = require('bare-path')

Worker.preload(resolve('worker-preload'))

module.exports = require('pino', { with: { imports: './imports.json' } })
