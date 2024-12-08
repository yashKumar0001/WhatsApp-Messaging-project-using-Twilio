require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // To handle JSON payloads

app.post('/webhook', (req, res) => {
  console.log('Webhook request received:', req.body);
  const message = req.body.Body;
  const from = req.body.From;

  console.log(`Message received from ${from}: ${message}`);
  res.send('<Response></Response>');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });
