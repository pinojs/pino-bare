# pino-bare

[Pino]([https://getpino.io/](https://github.com/pinojs/pino)) for [Bare](https://github.com/holepunchto/bare) & [Pear](https://github.com/holepunchto/pear).

```
npm i pino-bare
```

## Usage

```js
const logger = require('pino-bare')()

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')
```

See [Pino Documentation](https://getpino.io/).

## License

Apache-2.0
