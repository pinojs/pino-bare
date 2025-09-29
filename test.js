const test = require('brittle')
const { Transform } = require('bare-stream')
const { join } = require('bare-path')
const { readFile } = require('bare-fs')
const pino = require('.')

test('basic', (t) => {
  t.plan(3)

  const stream = new Transform()
  const instance = pino(stream)

  const child = instance.child({ a: 'property' })
  child.info('hello world')

  stream.once('data', (data) => {
    data = JSON.parse(data.toString())

    t.is(data.msg, 'hello world')
    t.is(data.level, 30)
    t.is(data.a, 'property')
  })
})

test('transport', async (t) => {
  t.plan(2)

  const target = require.resolve('./test/fixtures/transport')
  const destination = join(await t.tmp(), 'destination')

  const transport = pino.transport({ target, options: { destination } })

  const logger = pino(transport)
  logger.info('hello transport')

  setTimeout(async () => {
    const data = JSON.parse(await readFile(destination))

    t.is(data.msg, 'hello transport')
    t.is(data.level, 30)
  }, 500)
})
