var mongoose = require('mongoose')
mongoose.connect('mongodb://Hsiao:b10433018@ds111050.mlab.com:11050/bcp');
var express = require('express');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
 
});

var dataSchema = new mongoose.Schema({
    Date: String,
    VAR06:Number,
    VAR11:Number,
    VAR12:Number,
    VAR13:Number,
    VAR14:Number,
    VAR16:Number,
    VAR17:Number,
    VAR18:Number,
    VAR57:Number,
    VAR60:Number,
    Cycle:Number
}, {collection: 'data'});

var w = mongoose.model('writeData', dataSchema);//建立一個叫做predict的model,二個參數就是建立schema的地方
console.log("in write model")
module.exports =w;
