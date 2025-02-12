import http from 'http';


const users =[];
const server = http.createServer((req, res)=>{
  const { method, url } = req;

  if(method === 'GET' && url ==='/users'){
    return res
      .setHeader('Content-Type', 'application/json') // setando metadados no cabeçalho da requisição
      .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      name:'jon doe',
      email:'jondoe@gmail.com',
    })
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end()
})

server.listen(3333)