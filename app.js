const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require('./config/database');


db.authenticate()
    .then(() => console.log('dataabase connected...'))
    .catch(er => console.log('error: ' + err))

app.get('/', (req, res) => {
    console.log(req.body.email);
    res.send('here');
})
app.use('/user', require('./routes/user'));
app.use('/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening to port ${PORT}`));
