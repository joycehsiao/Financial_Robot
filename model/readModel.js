var mongoose = require('mongoose')
mongoose.connect('mongodb://Hsiao:b10433018@ds111050.mlab.com:11050/bcp');
var express = require('express');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
 
});

var readSchema=new mongoose.Schema({
    X_5: Number,
    X_6: Number,
    X_7: Number,
    X_8: Number,
    X_9: Number,
    X_10: Number,
  },{collection:'fundindex'});

  var r = mongoose.model('readData', readSchema);
  console.log("in read model");
  module.exports = r;