const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const { constants } = require('./constants');
const { authRouter, userRouter } = require('./routes');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('*', _notFoundHandler);
app.use(_hadleErrors);

app.listen(constants.PORT, () => {
  console.log(`App listen ${constants.PORT}`);
});

// eslint-disable-next-line no-unused-vars
function _hadleErrors(err, req, res, next) {
  res
    .status(err.status)
    .json({
      message: err.message || 'Unknown error',
      customCode: err.code || 0
    });
}

function _notFoundHandler(err, req, res, next) {
  next({
    status: err.status || 404,
    message: err.message || 'Rout not fond'
  });
}

function _mongooseConnector() {
  mongoose.connect(constants.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
