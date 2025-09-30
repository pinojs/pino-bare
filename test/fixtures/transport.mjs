import 'bare-process/global'

import { createWriteStream } from 'fs'

export default async ({ destination }) => createWriteStream(destination)
