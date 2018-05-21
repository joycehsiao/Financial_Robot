var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
readData = require('../model/readModel.js');
/* GET home page. */

router.get('/', function(req, res, next) {
  readData.find({},{},function(err,d){
    if(err){
      console.error(err);
    }
    else{
      var i1=[];
      var i2=[];
      var i3=[];
      var i4=[];
      var i5=[];
      var c=[];
      var objKey = Object.keys(d); //取得object編號 是陣列
      objKey.forEach(function(objectid){//對每一個物件做處理
          var items = Object.keys(d[objectid].toJSON());//取得key層
          items.forEach(function(itemkey) {
          var itemvalue =d[objectid][itemkey];
          if (itemkey == "X_5") {
            i1.push(itemvalue);
          }
          else if (itemkey == "X_6") {
            i2.push(itemvalue);
          }
          else if (itemkey == "X_7") {
            i3.push(itemvalue);
          }
          else if (itemkey == "X_8") {
            i4.push(itemvalue);
          }
          else if (itemkey == "X_9") {
            i5.push(itemvalue);
          }
          else if (itemkey == "X_10") {
            c.push(itemvalue);
          }
          /*objectid: 每一個Object的ID objkey裡保存的每一個Object的編號（取自Object.Keys())
            itemkey: 每一個Object底下的key
            itemvalue: 每一個key所對應的值 */
        })
      })
      console.log("first"+i1[0]);
      console.log("hrer"+i2[0]);
      res.render('chart.ejs',{
        index1:i1,
        index2:i2,
        index3:i3,
        index4:i4,
        index5:i5,
        cycle:c
      });
    }
  })
});

module.exports = router;
