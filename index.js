require('bare-process/global')

process.versions.node = '20.0.0' // Compatibility target

const Worker = require('bare-worker', { with: { imports: './imports.json' } })

Worker.preload(require.resolve('bare-process/global'))

module.exports = require('pino', { with: { imports: './imports.json' } })
