import type { NextApiRequest, NextApiResponse } from 'next'
import { default as generateMessage } from './append_message'

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  await generateMessage(req, res)
}
