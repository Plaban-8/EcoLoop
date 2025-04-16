const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Connection error:', err));

app.listen(4000);