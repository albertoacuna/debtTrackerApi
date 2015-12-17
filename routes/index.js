var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {
    car: "Chev",
    name : "Christine"
  }

  res.send(obj);
  //res.render('index', { title: 'Express' });
});

router.get('/getMintInfo', function(req, res) {
  var account = req.param('account');
  var pass = req.param('pass');
  var child_process = require('child_process');

  var command = "mintapi " + account + " " + pass;
  var output = child_process.execSync(command).toString();
  var json = JSON.parse(output);
  res.json(json);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
