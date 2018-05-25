var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
mongoose = require('mongoose');
var R = require("r-script");
var shiny = require('shiny');
var opencpu = require("opencpu");
writeData = require('../model/writeModel.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backend.ejs');
//   opencpu.rCall("model/connectiontest.R", {}, function (err, data) {
//     if (!err) {
//         console.log(data[0].mpg + data[1].mpg); // => 42
//     } else {
//         console.log(err);
//     }
//   });
  // var R = require("r-script");
  // var out = R("model/connectiontest.R")
  //       .callSync(function(err,resp){
  //                     console.log(out);
  //                  });
  // exec('Rscript model/connectiontest.R this is a test', function(error, stdout, stderr) {
    if (error) {
        console.log(error);
        res.send(error);
    }
    else if (stderr) {
        console.log(stderr);
        res.send(stderr);
    }
    else if (stdout) {
        console.log("RAN SUCCESSFULLY");
    }
// });

});
router.post('/', function (req, res) {  
    var newData={
      Date: req.body.a,
      VAR06: req.body.b,
      VAR11: req.body.c,
      VAR12: req.body.d,
      VAR13: req.body.e,
      VAR14: req.body.f,
      VAR16: req.body.g,
      VAR17: req.body.h,
      VAR18: req.body.i,
      VAR57: req.body.j,
      VAR60: req.body.k,
      Cycle: req.body.l
    };
    
    var entity=new writeData(newData);
    entity.save(function (err) {
      if (err) {
          // 存入失敗
          console.log('Something\'s wrong');
          return;
      }
      // 存入成功
     
    })
    res.redirect('index');
});


module.exports = router;
