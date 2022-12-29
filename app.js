const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('dotenv').config();

//route
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/web1');

//variable
const port = process.env.PORT_APP;
const host = process.env.HOST_APP;
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on===>${host}:${port}`);
});
