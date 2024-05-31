// middleware/logger.js

const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;

  console.log(`[${currentTime}] ${method} ${url} - ${res.statusCode} - ${ip}`);

  // Proceed to the next middleware function or route handler
  next();
};

module.exports = logger;
