var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //comment out this line:
  // res.send('respond with a resource');

  //And insert something instead:
  res.json([
    {
      id: 1,
      username: 'sam01'
    },
    {
      id: 2,
      username: 'Lee2'
    },
    {
      id: 3,
      username: 'App3'
    }
  ]);
});

module.exports = router;
