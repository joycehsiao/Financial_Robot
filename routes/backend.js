var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
writeData = require('../model/writeModel.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/backend.ejs');
});
router.post('/', function (req, res) {
  
    var newData={
      Date: '2990-01-31',
      VAR18: -0.3,
      VAR11: 100.16,
      VAR12: -0.1,
      VAR14: -1.2,
      VAR16: -0.7,
      VAR13: 67.4,
      VAR06: 50.8,
      VAR60: 5.9,
      VAR17: 100.6,
      Cycle: 1
    };
    var entity=new writeData(newData);
    entity.save(function (err) {
    
      if (err) {
          // 存入失敗
          console.log('Something\'s wrong');
          return;
      }
    
      // 存入成功
      console.log('meow');
    })
      // let user_id = cryptoRandomString(5);
      // res.cookie("user", req.body.name, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      // res.cookie("user_id", user_id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
      // res.redirect('/make_pair?user_id=' + user_id);
  // }
});


module.exports = router;
