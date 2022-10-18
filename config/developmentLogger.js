const { createLogger, format, transports } = require("winston");
const winston = require("winston");
const { combine, timestamp, printf } = format;

const developmentLoggerFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`;
});
const developmentLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(
            timestamp({ format: "HH:mm:ss"}),
            developmentLoggerFormat
        ),
        transports: [
            new transports.File({ filename: 'error.log', level: 'error' }),
            new transports.File({ filename: 'combined.log' }),
        ],
    });
}

module.exports = developmentLogger;