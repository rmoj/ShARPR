const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that server is up and running

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//create a GET route

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your Express Backend is Connected to React' });
});

app.listen(port, () => console.log('Listening on port ${port}'));
