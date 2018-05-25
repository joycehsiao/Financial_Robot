var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
predict = require('../model/predictModel.js');
var d;
var state;
router.get('/', function(req, res, next) {
  predict.findOne({'Index':1},'Cycle',function(err,data){
    if(err){
      res.end(err.toJSON);
    }
    else{
      d=data.Cycle;
      console.log('%d',d);
      if(d==1){state='谷底期';}
      else if(d==2){state='成長期';}
      else if(d==3){state='高峰期';}
      else if(d==4){state='走緩期';}
      console.log('%s',state);
    }
  });
  res.render('suggestion.ejs',{
    degree: d,
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
