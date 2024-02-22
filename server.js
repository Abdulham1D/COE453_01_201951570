const express = require('express');
const app = express();
const port = 6666; 

app.use(express.static('COE453_01_201951570')); 

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
