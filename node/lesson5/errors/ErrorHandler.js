class ErrorHandler extends Error {
  constructor(status, message, customCode) {
    super(message);
    this.message = message;
    this.status = status;
    this.code = customCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
