require('bare-process/global')

process.versions.node = '20.0.0' // Compatibility target

module.exports = require('pino', { with: { imports: './imports.json' } })
