const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//console.log that server is up and running

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('client/build')));
}

//create a GET route

app.get('/express_backend', (req, res) => {
  res.send({
    express: 'Your Express Backend is Connected to React, it is working!'
  });
});

app.listen(port, () => console.log(`🌎 ==> Server now on port ${port}!`));
