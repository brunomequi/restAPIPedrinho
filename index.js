const express = require('express');
const app = express();

app.use(express.json());
app.listen(3333);

const memorias = JSON.parse('./src/memorias/memorias.json');

app.get('/', function (req, res, next) {
  res.send(memorias);
});
