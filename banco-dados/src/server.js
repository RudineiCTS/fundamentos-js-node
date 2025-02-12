import http from 'http';
import { Database } from './database.js';


const database = new Database();
const server = http.createServer((req, res)=>{
  const { method, url } = req;

  if(method === 'GET' && url ==='/users'){
    const users = database.select('users');
    return res
     .setHeader('Content-Type', 'application/json')
     .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users'){
    // const { name, email} = req.body
    const user ={
      name:'jon doe',
      email:'jondoe@gmail.com',
    }
    database.insert('users',user);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end()
})

server.listen(3333)