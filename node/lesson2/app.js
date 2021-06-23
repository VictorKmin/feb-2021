const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
  defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));


const users = [
  { name: 'Dima', age: 22, password: 'Pa$$w0rd' },
  { name: 'Vika', age: 18, password: 'Pa$$w0rd' },
  { name: 'Khrystyna', age: 16, password: 'Pa$$w0rd' },
  { name: 'Viktor', age: 25, password: 'Pa$$w0rd' },
]

// app.get('/', (req, res) => {
//   // console.log(req);
//
//   // res.write('HELLO WORLD')
//   // res.write('HELLO WORLD 1')
//   // res.write('HELLO WORLD 2')
//   // res.end('HELLO CHAT')
//   // res.send('HELO')
//   res.json('dasdasd')
// });
//
// app.get('/ping', (req, res) => {
//   res.end('pong');
// });
//
// app.post('/', (req, res) => {
//   console.log(req.body);
//   console.log(req.query);
//   console.log('________________________________');
//   res.json('PPST')
// });
//
// app.get('/users', (req, res) => {
//   res.json(users);
// })
//
// app.get('/users/:userId', (req, res) => {
//   const { userId } = req.params;
//
//   res.json(users[userId]);
// });


app.get('/users', (req, res) => {
  res.render('users', { name: 'Diana', users });
});

app.get('/login', (req, res) => {
  res.render('login', { isAdult: false });
});

app.post('/login', (req, res) => {
  console.log('________________________');
  console.log(req.body);
  console.log('________________________');

  res.json('OK');
})

app.listen(3000, () => {
  console.log('App listen 3000');
})


// ------------- NOT GOOD -------------------
// GET /users/all
// GET /users/getOneById
// GET /users/singe
// PUT /users/updateUser
// DELETE /users/deleteUser/:id
// PATCH /users/blockUser/:id


// GET /users
// GET /users/:user_id
// GET /users?email=victor.fzs10
// PUT /users/:user_id
// DELETE /users/:user_id
// PATCH /users/block/:user_id
// PATCH /users/unblock/:user_id
