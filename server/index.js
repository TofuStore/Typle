const express = require('express');
const axios = require('axios');
const config = require('./config');
const words =  require('./words');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/word', (req, res) => {
  res.send({word: words[Math.floor(Math.random() * words.length)]});
});

app.get('/api/check', (req, res) => {
  axios({
    method: 'get',
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.query.word}/definition`,
    headers: {
      'x-rapidapi-host': config.API_HOST,
      'x-rapidapi-key': config.API_KEY
    }
  })
    .then((results) => {
      res.send(results.data);
    })
    .catch((error) => {
      console.log('not found');
      res.send('not found');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});