import http from 'http';
import { Database } from './database.js';
import { routes } from './routes.js';

const server = http.createServer((req, res)=>{
  const { method, url } = req;


  const route = routes.find(route => route.method === method && route.path === url);

  if(route){
    route.handler(req, res);
  }

 

  return res.writeHead(404).end()
})

server.listen(3333)