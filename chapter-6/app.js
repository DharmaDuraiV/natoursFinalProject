const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  req.requestedTime1 = new Date().toLocaleString('en-IN');
  next();
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
