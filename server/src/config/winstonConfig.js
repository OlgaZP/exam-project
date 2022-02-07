const { createLogger, format, transports } = require('winston');
const fs = require('fs');

require('winston-daily-rotate-file');

const errorStackTracerFormat = format(info => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message,
    });
  }
  return info;
});

const logsFormat = format.combine(
  //   format.timestamp(function () {
  //     return 'test timestamp';
  //   }),
  //   {    format: 'YYYY-MM-DD HH:mm:ss',  }

  format.errors({ stack: true }),

  errorStackTracerFormat(),
  format.json(),
  format.printf(
    info =>
      `level: "${info.level}" message:"${
        info.message
      }", time:${new Date().getTime()}, code: ${
        info.meta?.error.code
      }, stackTrace: {${info.stack}}`
  )
);

const transportFormat = new transports.DailyRotateFile({
  dirname: './logs/',
  filename: 'squad-test-%DATE%.log',
  frequency: '10m', //for testing every 10 minutes changes log file
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: false,
  // maxFiles: '31d'
});

transportFormat.on('rotate', function (oldFilename, newFilename) {
  // do something fun
  fs.writeFileSync(
    oldFilename,
    'End writing daily logs. See the next file...\n'
  );
  fs.writeFileSync(newFilename, 'Starting the daily logfie....\n');
});

const logger = createLogger({
  level: 'info',
  format: logsFormat,
  defaultMeta: { service: 'squadhelp-exam-project' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    // new transports.File({
    //   filename: './logs/test-app-error.log',
    //   level: 'error',
    // }),
    new transports.File({ filename: './logs/test-app-combined.log' }),
    transportFormat,
  ],
});

logger.error('Test logger error stack message...', new Error('My ERROR!'));

//
// Replaces the previous transports with those in the
// new configuration wholesale.
//
// const DailyRotateFile = require('winston-daily-rotate-file');
// logger.configure({
//   level: 'info',
//   transports: [
//     new DailyRotateFile(opts)
//   ]
// });

module.exports = logger;
