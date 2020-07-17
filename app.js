const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Welcome' });
});

app.post('/confirmation', (req, res) => {
  console.log('....................... confirmation .............');
  res.status(200).json({
    ResultCode: 0,
    ResultDesc: 'confirmation Service processing successful',
  });
  console.log(req.body);
});

app.post('/validation', (req, resp) => {
  console.log('....................... validation .............');
  res.status(200).json({
    ResultCode: 0,
    ResultDesc: 'validation Service processing successful',
  });
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server running on the ${port}`);
});
