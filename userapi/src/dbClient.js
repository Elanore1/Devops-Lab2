var redis = require("redis");

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

var db = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT
});

db.on('connect', () => console.log(`Redis is connected on host ${REDIS_HOST} and port ${REDIS_PORT}`));
db.on("error", (error) => console.error(error));

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
