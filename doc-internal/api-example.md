# API Example

```js
// src/pages/api/example.ts
import type { APIRoute } from 'astro';

// Optional: Set to false if you want this to run on the server (SSR) every time
// "true" means it builds once at build time (static).
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({
    message: "This is a GET request!"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  // Do something with data...

  return new Response(JSON.stringify({
    received: body
  }), { status: 200 });
};
```
