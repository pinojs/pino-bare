require('bare-node-runtime/global')

process.versions.node = '20.0.0' // Compatibility target

module.exports = require('pino', { with: { imports: 'bare-node-runtime/imports' } })
