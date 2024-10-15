// logger.js
const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `Sistema de monitoramento diz: ${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`
    );
  });

  next();
};

export default logger;
