var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
predict = require('../model/predictModel.js');

router.get('/', function(req, res, next) {
  predict.findOne({'Date':'2000-10-31'},'Cycle',function(err,data){
    if(err){
      res.end(err.toJSON);
    }
    else{
      degree=data.Cycle;
      console.log('%d',degree);
      if(degree==1){state='成長期1';}
      else if(degree==2){state='成長期2';}
      else if(degree==3){state='成長期3';}
      else if(degree==4){state='成長期4';}
    }
  });
  res.render('suggestion.ejs',{
    degree: degree,
    test: state
  });
});

// router.get('/', function(req, res, next) {
  // var degree=1;
  // var index1=[];
  // var index2=[];
  // var index3=[];
  // var index4=[];
  // var index5=[];
  // var index6=[];

  
//});


// readData.find({},{},function(err,d){
  
//   if(err){
//     console.error(err);
//   }
//   else{
//      var index1=[];
//      var index2=[];
//      var index3=[];
//      var index4=[];
//      var index5=[];
//      var index6=[];
//     var objKey = Object.keys(d); //取得object編號 是陣列
//     objKey.forEach(function(objectid){//對每一個物件做處理
//         var items = Object.keys(d[objectid].toJSON());//取得key層
//         items.forEach(function(itemkey) {
//         var itemvalue =d[objectid][itemkey];
//         if (itemkey == "X_5") {
//           index1.push(itemvalue);
//         }
//         else if (itemkey == "X_6") {
//           index2.push(itemvalue);
//         }
//         else if (itemkey == "X_7") {
//           index3.push(itemvalue);
//         }
//         else if (itemkey == "X_8") {
//           index4.push(itemvalue);
//         }
//         else if (itemkey == "X_9") {
//           index5.push(itemvalue);
//         }
//         else if (itemkey == "X_10") {
//           index6.push(itemvalue);
//         }
//         /*objectid: 每一個Object的ID objkey裡保存的每一個Object的編號（取自Object.Keys())
//           itemkey: 每一個Object底下的key
//           itemvalue: 每一個key所對應的值 */
//       })
//     })
//     set.setData(index1,index2,index3,index4,index5,index6);
//   }
// });

module.exports = router;
