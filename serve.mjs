import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }

  try {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    const relative = pathname.replace(/^[/\\]+/, '') || 'index.html';
    let file = resolve(root, relative);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    const body = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': body.length,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store',
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Rostera is ready at http://localhost:${port}`);
  console.log('Keep this terminal open while using Rostera from another device on the same Wi-Fi.');
});
