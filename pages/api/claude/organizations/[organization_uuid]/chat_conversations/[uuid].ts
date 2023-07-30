import type { NextApiRequest, NextApiResponse } from 'next'

const conversation = {
  "uuid":"e155a874-86ac-473f-84ef-f95b5df38879",
  "name":"Mocking Server-Sent Events",
  "summary":"",
  "created_at":"2023-07-16T15:12:00.319477+00:00",
  "updated_at":"2023-07-27T07:37:09.753925+00:00",
  "chat_messages":[
    {"uuid":"ab2913de-f04e-44ca-8181-691a368bf87b","text":"如何 mock server-sent event 响应","sender":"human","index":0,"created_at":"2023-07-18T13:15:52.755040+00:00","updated_at":"2023-07-18T13:15:52.755040+00:00","edited_at":null,"chat_feedback":null,"attachments":[]},
    {"uuid":"03e32d6f-1633-49bd-bb5f-b5a55757276a","text":" 要模拟服务器发送事件(SSE)响应,可以按以下步骤操作:\n\n1. 设置响应头:\n\n```\nContent-Type: text/event-stream\nCache-Control: no-cache\nConnection: keep-alive\n```\n\n这告诉客户端这是一个 SSE 流。\n\n2. 按照事件流格式发送数据:\n\n```\ndata: {\"message\": \"Hello World\"}\n\ndata: {\"message\": \"Foo Bar\"}\n\n```\n\n每条消息之间用两个换行符分隔。\n\n3. Node.js 示例:\n\n```js\nconst SSE = require('sse');\n\napp.get('/stream', (req, res) => {\n  res.writeHead(200, {\n    'Content-Type': 'text/event-stream',\n    'Cache-Control': 'no-cache',\n    'Connection': 'keep-alive'\n  });\n\n  const sse = new SSE(res);\n\n  setInterval(() => {\n    const data = {message: `Hello at ${Date.now()}`};\n\n    sse.send(JSON.stringify(data));\n  }, 1000);\n});\n```\n\n这样就可以模拟一个简单的 SSE 接口了。也可以参考一些 SSE 库的实现,如 sse-channel。","sender":"assistant","index":2,"created_at":"2023-07-18T13:20:26.502957+00:00","updated_at":"2023-07-18T13:20:26.502957+00:00","edited_at":null,"chat_feedback":null,"attachments":[]},
    {"uuid":"a4d6f002-dda6-403b-9603-4f93bfa31e27","text":"在 Next.js 中生成服务器发送事件(SSE)响应的方法如下:\n\n1. 创建 SSE 事件处理器:\n\n```js\n// sse.js\nimport { ServerResponse } from 'http';\n\nexport default (res: ServerResponse) => {\n  res.writeHead(200, {\n    'Content-Type': 'text/event-stream',\n    'Cache-Control': 'no-cache',\n    Connection: 'keep-alive'\n  });\n\n  const send = (data: string) => {\n    res.write(`data: ${data}\\n\\n`);\n  };\n\n  return {\n    send\n  }\n};\n```\n\n2. 在 API 路由中使用:\n\n```js\n// pages/api/stream.js\n\nimport sse from '../../sse';\n\nexport default async function handler(req, res) {\n  const eventStream = sse(res);\n\n  // 每秒发送事件\n  setInterval(() => {\n    const data = {\n      time: new Date().toISOString()\n    };\n    eventStream.send(JSON.stringify(data));\n  }, 1000);\n}\n```\n\n3. 客户端订阅事件:\n\n```js\nconst eventSource = new EventSource('/api/stream'); \n\neventSource.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  // ...\n}\n```\n\n这样就可以实现一个 SSE 长连接了。\n\n关键是设置正确的响应头,并按事件流格式发送数据。在 Next.js 中通过 API 路由处理这些逻辑。","sender":"assistant","index":4,"created_at":"2023-07-27T05:29:45.948273+00:00","updated_at":"2023-07-27T05:29:45.948273+00:00","edited_at":null,"chat_feedback":null,"attachments":[]},
    {"uuid":"23abb252-f038-468a-8290-90bc1fd63f82","text":"next.js 中生成 SSE 响应","sender":"human","index":3,"created_at":"2023-07-27T05:29:45.863363+00:00","updated_at":"2023-07-27T05:29:45.863363+00:00","edited_at":null,"chat_feedback":null,"attachments":[]},
    {"uuid":"8e89cbd6-fe64-4eba-b828-49ffdd72f690","text":"把上面的内容翻译成英文","sender":"human","index":5,"created_at":"2023-07-27T07:36:12.624939+00:00","updated_at":"2023-07-27T07:36:12.624939+00:00","edited_at":null,"chat_feedback":null,"attachments":[]},
    {"uuid":"3736ce22-f9ec-4ed5-a75e-426854239e74","text":" Here is the translation of the previous conversation about mocking server-sent event responses in Next.js into English:\n\nTo mock a server-sent event (SSE) response, you can follow these steps:\n\n1. Set the response headers:\n\n```\nContent-Type: text/event-stream\nCache-Control: no-cache\nConnection: keep-alive\n```\n\nThis tells the client this is an SSE stream. \n\n2. Send data in event stream format:\n\n```\ndata: {\"message\": \"Hello World\"}\n\ndata: {\"message\": \"Foo Bar\"}\n```\n\nSeparate each message with two newline characters.\n\n3. Node.js example:\n\n```js\nconst SSE = require('sse');\n\napp.get('/stream', (req, res) => {\n  res.writeHead(200, {\n    'Content-Type': 'text/event-stream',\n    'Cache-Control': 'no-cache',\n    'Connection': 'keep-alive'\n  });\n\n  const sse = new SSE(res);\n\n  setInterval(() => {\n    const data = {message: `Hello at ${Date.now()}`};\n\n    sse.send(JSON.stringify(data));\n  }, 1000);\n});\n```\n\nThis mocks a simple SSE interface. You can also refer to the implementations of some SSE libraries like sse-channel.\n\nTo generate server-sent event (SSE) responses in Next.js:\n\n1. Create an SSE handler: \n\n```js\n// sse.js\nimport { ServerResponse } from 'http';\n\nexport default (res: ServerResponse) => {\n  res.writeHead(200, {\n    'Content-Type': 'text/event-stream',\n    'Cache-Control': 'no-cache',\n    Connection: 'keep-alive'\n  });\n\n  const send = (data: string) => {\n    res.write(`data: ${data}\\n\\n`);\n  };\n\n  return {\n    send\n  }\n};\n```\n\n2. Use it in an API route:\n\n```js \n// pages/api/stream.js\n\nimport sse from '../../sse';\n\nexport default async function handler(req, res) {\n  const eventStream = sse(res);\n\n  // Send event every second\n  setInterval(() => {\n    const data = {\n      time: new Date().toISOString()\n    };\n    eventStream.send(JSON.stringify(data));\n  }, 1000);\n}\n```\n\n3. Client subscribes to events:\n\n```js\nconst eventSource = new EventSource('/api/stream');\n\neventSource.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  // ...\n}\n```\n\nThis implements a SSE persistent connection. \n\nThe key is to set the proper response headers and send data in event stream format. In Next.js this logic is handled in API routes.","sender":"assistant","index":7,"created_at":"2023-07-27T07:37:09.753925+00:00","updated_at":"2023-07-27T07:37:09.753925+00:00","edited_at":null,"chat_feedback":null,"attachments":[]}
  ]
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'GET':
      res.status(200).json(conversation)
      break
    case 'DELETE':
      res.status(204)
      break
    default:
      res.status(405)
  }
}