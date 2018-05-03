var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var predictRouter = require('./routes/predict');
var aboutRouter = require('./routes/about');
var app = express();

app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/predict',predictRouter);
app.use('/about',aboutRouter);



console.log("hi");
module.exports = app;




// var MongoClient=require('mongodb').MongoClient;
// var url='mongodb://localhost:27017/financeDB';
// var pd;
// var findDocuments = function(db, callback) {
//     var collection = db.collection('predict');
//     collection.find({date:"now"}).toArray(function(err,docs){
//         if (err) throw err;
//         pd=docs.date;
//         console.log(pd);
//         callback;
//     })

// }
// MongoClient.connect(url, function(err, client){
//     if (err) throw err;
//     findDocuments(client.db('financeDB'), function(){
//         db.close();
//     });
// })
