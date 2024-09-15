// Budget API
const bud = require('./budget.json');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());



app.use('/',express.static('public'));

app.get('/budget', (req, res) => {
    res.json(bud);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});