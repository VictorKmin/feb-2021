const express = require('express');
const path = require('path');

const { userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('App listen 3000');
});
