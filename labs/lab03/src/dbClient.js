const redis = require("redis");

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0788d01 (fix:docker-compse,dbclient,index.js)
const REDIS_HOST = process.env.REDIS_HOST || 'redis';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const db = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT
});

db.on('connect', () => console.log(`Redis is connected on port ${REDIS_PORT}`));
db.on('error', (error) => console.error(error));
<<<<<<< HEAD
=======
const config = configure()
var db = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  retry_strategy: () => {
    return new Error("Retry time exhausted")
  }
})
>>>>>>> e60bfb7 (fix:vagrant,docker,userapi)
=======
>>>>>>> 0788d01 (fix:docker-compse,dbclient,index.js)

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
