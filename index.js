const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');

const app = express(); // instance of express
const port = process.env.PORT || 8080; //port number


app
    .use(express.static('Public'))
    .use(morgan('dev'))

.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())


.post('/api/user', (req, res) => {
    res.json(req.body);
})

.listen(port, () => console.log(`Server Listening on port ${port}`));