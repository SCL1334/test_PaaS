const express = require('express')
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const rawData = fs.readFileSync('test.json');
  const data = JSON.parse(rawData)
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})