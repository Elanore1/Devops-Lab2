const express = require('express');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const db = require('./dbClient');
db.on('error', (err) => {
  console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/user', userRouter);

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Gracefully handle shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

module.exports = server;
