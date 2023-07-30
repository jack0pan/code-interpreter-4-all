import type { NextApiRequest, NextApiResponse } from 'next'

const conversations = [
  {
    uuid: 'a8124dc4-3f8c-406d-8c00-ebee8b854267',
    name: 'chat 1',
    summary: '',
    created_at: '2023-07-12T04:57:20.916297+00:00',
    updated_at: '2023-07-16T12:16:16.876272+00:00',
  },
  {
    uuid: '925e6456-cc9c-4616-aaeb-728c9b957680',
    name: 'chat 2',
    summary: '',
    created_at: '2023-07-15T15:10:15.013518+00:00',
    updated_at: '2023-07-15T15:12:54.249898+00:00',
  },
  {
    uuid: 'b62fe5dc-bb7b-4c84-b252-3445677fe654',
    name: 'chat 3',
    summary: '',
    created_at: '2023-07-16T12:28:15.671361+00:00',
    updated_at: '2023-07-16T12:28:29.715445+00:00',
  },
  {
    uuid: '69d3151c-564d-4a76-a41d-26373f32f774',
    name: 'chat 4',
    summary: '',
    created_at: '2023-07-16T15:13:11.287769+00:00',
    updated_at: '2023-07-16T15:30:22.418180+00:00',
  },
  {
    uuid: 'e155a874-86ac-473f-84ef-f95b5dfe8879',
    name: 'chat 5',
    summary: '',
    created_at: '2023-07-16T15:12:00.319477+00:00',
    updated_at: '2023-07-27T07:37:09.753925+00:00',
  },
  {
    uuid: '725d7815-0435-478e-806c-5b9a24ea0ad6',
    name: 'chat 6',
    summary: '',
    created_at: '2023-07-18T14:10:56.604756+00:00',
    updated_at: '2023-07-18T14:11:00.034264+00:00',
  },
  {
    uuid: '0b9bea34-d4ae-49e6-85a5-5dd2ccc83dda',
    name: 'chat 7',
    summary: '',
    created_at: '2023-07-18T14:15:28.386156+00:00',
    updated_at: '2023-07-18T15:38:54.965325+00:00',
  },
  {
    uuid: 'e2cdcc19-e86d-4bf0-8ad6-ada7bbc9a037',
    name: 'chat 8',
    summary: '',
    created_at: '2023-07-19T05:26:49.979918+00:00',
    updated_at: '2023-07-19T05:26:57.493611+00:00',
  },
  {
    uuid: '402ca939-0acc-473b-821f-c0dc53673db0',
    name: 'chat 9',
    summary: '',
    created_at: '2023-07-28T05:17:29.301958+00:00',
    updated_at: '2023-07-28T05:40:26.047264+00:00',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'GET':
      res.status(200).json(conversations)
      break
    case 'POST':
      res.status(200).json(conversations[0])
      break
    case 'DELETE':
      res.status(204)
      break
    default:
      res.status(405)
  }
}
