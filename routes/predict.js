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

// function rewrite(){
//   if(degree==1){
//     document.getElementById("degree").innerHTML="New text!";
//   }
  
// }

// predict.find(function(err, data) {

//   if (err) {
//       console.error(err);
//   } 
//   else { 

//     // var jsonData=data.toJSON();
//     // var objKey = Object.keys(jsonData);
//     // objKey.forEach(function(objectid){
//     //   var items = Object.keys(jsonData[objectid]);
//     //   console.log("test"+jsonData[objectid]);
//     //   items.forEach(function(itemkey) {
//     //     var itemvalue =jsonData[objectid][itemkey];
//     //     console.log("test2"+jsonData[objectid][itemkey]);
//     //     console.log(objectid+': '+itemkey+' = '+itemvalue);
//     //   })
//     // })
//     console.log("data"+data);
//   }
// })

module.exports = router;