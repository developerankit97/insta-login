const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000);