const express = require('express');
require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Include routes
require('./routes/api/gameRoutes')(app);


const PORT = process.env.SERVER_PORT || 3001;


app.listen(PORT, () => console.log(`API Server started on port ${PORT}`));