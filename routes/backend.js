var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
writeData = require('../model/writeModel.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backend.ejs');
});
router.post('/', function (req, res) {  
    var newData={
      Date: req.body.a,
      VAR18: req.body.b,
      VAR11: req.body.c,
      VAR12: req.body.d,
      VAR14: req.body.e,
      VAR16: req.body.f,
      VAR13: req.body.g,
      VAR06: req.body.h,
      VAR60: req.body.i,
      VAR17: req.body.j,
      Cycle: req.body.k
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
      console.log(req.body.a);
    })
    res.redirect('backend');
});


module.exports = router;
