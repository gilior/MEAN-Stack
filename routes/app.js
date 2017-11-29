var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/message', function (req, res, next) {
  res.render('node', {message: 'hello'})
})

router.post('/message', function (req, res, next) {
  var message = req.body.message;
  res.redirect('/message/'+message)
})

module.exports = router;