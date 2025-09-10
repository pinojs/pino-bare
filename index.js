require('bare-process/global')

module.exports = require('pino', { with: { imports: './imports.json' } })
