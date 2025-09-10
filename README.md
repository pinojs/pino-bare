# pino-bare

Pino compatibility module for Bare.

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

## License

Apache-2.0
