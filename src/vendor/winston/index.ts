import winston, { format } from 'winston';

/* Mock logger */
// eslint-disable-next-line import/no-mutable-exports
let logger = {
  add: Function,
  debug: Function,
  log: Function,
  warn: Function,
  info: Function,
  error: Function,
} as unknown as winston.Logger;

logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp'/* , 'label' */] }),
    format.printf((info) => {
      const out = `${info.level} - ${new Date().valueOf()}: ${JSON.stringify(info.message, null, 2)}`;
      return out;
    }),
  ),
  defaultMeta: { service: 'REST API' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: 'debug',
    format: format.combine(
      format.timestamp(),
      format.metadata({ fillExcept: ['message', 'level', 'timestamp'/* , 'label' */] }),
      format.colorize(),
      format.printf((info) => {
        const out = `${info.level} - ${new Date().valueOf()}: ${JSON.stringify(info.message, null, 2)}`;
        return out;
      }),
    ),
  }));
}

export default logger;
