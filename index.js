const express = require('express');
const fs = require('fs');

const app = express();

const server = require('https').createServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
}, app);

app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening...localhost:${PORT}`);
});
