const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
// trazer rotas para cá: app.use(router);


module.exports = app;