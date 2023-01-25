// http
import http, { IncomingMessage, ServerResponse } from 'http';

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET' && req.url === '') {
    res.statusCode = 200;
    res.write('user list');
    res.end();
  } else if (req.method === 'POST' && req.url === '') {
    res.write('create a new product');
    res.end();
  } else if (req.method === 'DELETE' && req.url === '') {
    res.write('delete user by id');
    res.end();
  }
  res.writeHead(404);
  res.end('Not found');
};

const server = http.createServer(requestListener);

const port = 5000;
server.listen(port, () => {
  console.log(`My first server is on http://localhost:${port}`);
});
