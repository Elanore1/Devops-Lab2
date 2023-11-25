var redis = require("redis");
const configure = require('./configure')

const config = configure()
var db = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  retry_strategy: () => {
    // Return undefined to keep retrying indefinitely
    return undefined;
  }
})

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db;
