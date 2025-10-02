require('bare-process/global')

const Worker = require('bare-worker', { with: { imports: './imports.json' } })

Worker.preload(require.resolve('bare-process/global'))

module.exports = require('pino', { with: { imports: './imports.json' } })
