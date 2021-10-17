// Run app by typing 'node index' in terminal

const express = require('express');
const app = express();

app.listen(8000, () => console.log('App is running on port 8000'));

const users = [];

// node-hayjaw--8000.local.webcontainer.io/10?name=Max => Max#10
app.get('/:id', (req, res) => {
  res.send(req.query.name + '#' + req.params.id);
});

app.post('/user', (req, res) => {
  const newUser = req.body;
  const isEmailInUse = users.some((user) => user.email === email);

  if (isEmailInUse) {
    res.status(400).send('email already in use');
  } else {
    users.push(newUser);
    res.send('user created');
  }
  // 200 - OK
  // 400 - failed
});

// ?email=hassas@gmail.com&newName=Hassas
app.put('/user/update', (req, res) => {
  const email = req.query.email;
  const newName = req.query.newName;
  const userToUpdate = users.find((user) => user.email === email);

  if (userToUpdate) {
    // update name to newName
    userToUpdate.name = newName;
  } else {
    // if the email is not in use
    res.status(400).send('email is not in use');
  }
});
