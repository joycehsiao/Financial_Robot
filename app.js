var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var suggestionRouter = require('./routes/suggestion');
var chartRouter = require('./routes/chart');
var backendRouter = require('./routes/backend');
var app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/about',aboutRouter);
app.use('/suggestion',suggestionRouter);
app.use('/chart',chartRouter);
app.use('/backend',backendRouter);



module.exports = app;

