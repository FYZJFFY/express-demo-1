var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users发送这句话');
});
router.get('/xxx', function(req, res, next) {
  res.send('xxx发送这句话');
});


module.exports = router;
