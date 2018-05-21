var express = require('express');
var router = express.Router();
mongoose = require('mongoose'),
predict = require('../model/predictModel.js');
predictDegree = require('../public/javascripts/predictDegree.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/predict.html');
});


var degree=1;

predict.findOne({'Date':'2000-10-31'},'Cycle',function(err,data){
  if(err){
    console.error(err);
  }
  else{
    degree=data.Cycle;
    console.log('%d',degree);
    predictDegree.setDegree(degree);
  }
});



module.exports = router;