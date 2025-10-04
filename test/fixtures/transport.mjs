import { createWriteStream } from 'fs'

export default async ({ destination }) => createWriteStream(destination)
