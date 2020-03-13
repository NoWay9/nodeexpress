const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();


const postRoute = require('./routes/posts');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/posts', postRoute);


app.get('/', (req, res) => {
    res.send('Work')
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
        console.log('Connected to DB')
    }
})

app.listen(3000);