const redis = require("redis");

const REDIS_HOST = process.env.REDIS_HOST || 'redis';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const db = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT
});

db.on('connect', () => console.log(`Redis is connected on port ${REDIS_PORT}`));
db.on('error', (error) => console.error(error));

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
