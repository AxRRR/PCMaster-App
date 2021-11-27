const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const app = express();
const http = require('http').createServer(app);

dbConnection();

app.use(express.json());

app.use('/api/services', require('./routes/services'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));

http.listen( 4000, () => {
  for (let index = 0; index < 5; index++) {
      console.log('')
  }
  console.log('         Application is running now in')
  console.log(`         http://localhost:${process.env.PORT}/api/`)
})