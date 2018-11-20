const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that server is up and running

app.listen(port, () => console.log('Listening on port ${port}'));

//create a GET route

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your Express Backend is Connected to React' });
});
