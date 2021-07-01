const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { User } = require('./dataBase');
const { passwordHasher } = require('./helpers');
const { userRouter } = require('./routes');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.post('/auth', async (req, res) => {
  try {
    const { password, email } = req.body;

    const userByEmail = await User.findOne({ email }).select('+password');

    if (!userByEmail) {
      throw new Error('Wrong email or password !!!!!!!');
    }

    console.log('________________________________');
    console.log(userByEmail);
    console.log('________________________________');

    await passwordHasher.compare(userByEmail.password, password);

    res.json(userByEmail);
  } catch (e) {
    console.log(e);
    res.json(e.message);
  }
});
app.use('/users', userRouter);
app.use('*', _notFoundHandler);
app.use(_hadleErrors);

app.listen(3000, () => {
  console.log('App listen 3000');
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
  mongoose.connect('mongodb://localhost:27017/feb-2021', { useNewUrlParser: true, useUnifiedTopology: true });
}
