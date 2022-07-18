const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/Nodejs-api-test'
mongoose.connect(url, { useNewUrlParser: true })
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes');

app.use('/api', routes)
