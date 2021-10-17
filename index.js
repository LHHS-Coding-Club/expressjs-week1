// Run app by typing 'node index' in terminal

const express = require('express');
const app = express();

app.listen(8000, () => console.log('App is running on port 8000'));

const users = [];

app.get('/:id', (req, res) => {
  res.send(req.query.name + '#' + req.params.id);
  // Example: node-hayjaw--8000.local.webcontainer.io/10?name=Max
  // Max#10
});

app.post('/user', (req, res) => {
  const newUser = req.body;
  const isEmailInUse = true;

  if (isEmailInUse) {
    res.status(400).send('email already in use');
  } else {
    users.push(newUser);
    res.send('user created');
  }
  // if already in use
  // 200 - OK
  // 400 - failed
});

app.put('/user/update', (req, res) => {
  const email = req.query.email;
  const newName = req.query.newName;
  const isEmailInUse = users.some((user) => user.email === email);

  // find user and update name to newName
  // if the email is not in use
  res.status(400).send('email is not in use');
  // ?email=hassas@gmail.com&newName=Hassas
});
