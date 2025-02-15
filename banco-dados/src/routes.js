import { Database } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';
const database = new Database();

export const routes = [
  {
    path: '/users',
    method: 'GET',
    handler: (req, res) => {
      const users = database.select('users');
      return res.setHeader('Content-Type', 'application/json').end(JSON.stringify(users));
    }
  },
  {
    path: '/users',
    method: 'POST',
    handler: (req, res) => {
      const { name, email } = req.body;
      const user = { name, email };
      database.insert('users', user);
      return res.writeHead(201).end();
    }
  },
  {
    path: buildRoutePath('/users/:id'),
    method: 'PUT',
    handler: (req, res) => {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = { id, name, email };
      database.update('users', user);
      return res.writeHead(200).end();
    }
  }
]