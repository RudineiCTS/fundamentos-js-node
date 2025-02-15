import http from 'http';
import { Transform } from 'stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const transformed = Number(chunk.toString()) * -1;
    console.log(transformed)
    callback(null, Buffer.from(String(transformed)))
  }

}

//req => readableStream
//res => writableStream
const server = http.createServer(async (req, res) => {
  const buffers =[];
  // return req.pipe(new InverseNumberStream()).pipe(res);

    for await (const chunk of req){
      buffers.push(chunk);
    }

    const fullStreamContent= Buffer.concat(buffers).toString();

    console.log(fullStreamContent);
    return res.end(fullStreamContent);
});

server.listen(3334);