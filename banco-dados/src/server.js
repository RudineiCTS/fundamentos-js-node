import http from 'http';
import { Database } from './database.js';
import { routes } from './routes.js';

const server = http.createServer((req, res)=>{
  const { method, url } = req;


  const route = routes.find(route => route.method === method && route.path === url);

  console.log(route);

 

  return res.writeHead(404).end()
})

server.listen(3333)