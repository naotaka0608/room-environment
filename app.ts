var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const helmet = require('helmet');

var app = express();
//app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req:any, res:any, next:any) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* database */
/* --------------------begin-------------------- */
const mongoose = require('mongoose');

// When the database is closed
mongoose.connection.on('closed', () => {
	console.log('closed');
});

// database disconnected
mongoose.connection.on('disconnected', () => {
	console.log('disconnected');
});

// When reconnecting to the database
mongoose.connection.on('reconnected', () => {
	console.log('reconnected');
});

// Database connection error
mongoose.connection.on('error', (error:any) => {
	console.log('error');
});

// Mongo connectivity options
const options = {
	keepAlive: 1,
	connectTimeoutMS: 1000000,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/mydb', options).then(()=> {
	console.log('DB conected!');
}).catch((err:any) => console.log(err));

/* --------------------end-------------------- */

module.exports = app;
