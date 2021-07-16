const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://d5229aba402f45a38da506b1302ba141@o499963.ingest.sentry.io/5868730',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

module.exports = Sentry;
