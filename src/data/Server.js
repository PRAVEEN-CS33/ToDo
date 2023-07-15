const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.post('/accounts', (req, res) => {
  const newAccount = req.body;
  // Generate a unique ID for the new account
  newAccount.id = Math.floor(Math.random() * 1000) + 1;
  
  // Add the new account to the 'accounts' array in db.json
  const db = router.db;
  db.get('accounts').push(newAccount).write();
  
  res.status(201).json(newAccount);
});

server.listen(3003, () => {
  console.log('JSON Server is running on port 3003');
});
