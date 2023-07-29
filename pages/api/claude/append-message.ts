// reference https://github.com/vercel/next.js/discussions/48427#discussioncomment-6028533
import type { NextApiRequest, NextApiResponse } from 'next'
import EventEmitter from 'events'

export const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const stream = new EventEmitter();

type Data = {
  completion: string
  stop_reason?: string
  model: string
  stop?: string
  log_id: string
  messageLimit: {
    type: string
  }
}

const exampleCompletion = `To generate server-sent event (SSE) responses in Next.js:

1. Create an SSE handler: 

\`\`\`js
// sse.js
import { ServerResponse } from 'http';

export default (res: ServerResponse) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });

  const send = (data: string) => {
    res.write(\`data: \${data}\n\n\`);
  };

  return {
    send
  }
};
\`\`\`

2. Use it in an API route:

\`\`\`js 
// pages/api/stream.js

import sse from '../../sse';

export default async function handler(req, res) {
  const eventStream = sse(res);

  // Send event every second
  setInterval(() => {
    const data = {
      time: new Date().toISOString()
    };
    eventStream.send(JSON.stringify(data));
  }, 1000);
}
\`\`\`

3. Client subscribes to events:

\`\`\`js
const eventSource = new EventSource('/api/stream');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // ...
}
\`\`\`

This implements a SSE persistent connection. 

The key is to set the proper response headers and send data in event stream format. In Next.js this logic is handled in API routes.`

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");

  stream.on("channel", function (event, completion) {
    const data: Data = {
      completion,
      model: 'claude-2.0',
      log_id: 'ff8c410dd8b98e8ed0dccfd52d7376df2179a85760a5282366fd97b0e23fdf5b',
      messageLimit: {
        type: 'withid_limit'
      }
    }
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });

  const words = exampleCompletion.split(' ')
  for (let i = 0; i < words.length; ++i) {
    stream.emit("channel", "completion", ` ${words[i]}`);
    await delay(50);
  }
  res.end("done\n");
}
