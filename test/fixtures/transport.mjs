import 'bare-process/global'

import { createWriteStream } from 'bare-fs'

export default async ({ destination }) => createWriteStream(destination)
