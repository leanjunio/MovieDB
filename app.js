const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {

  let urlRequest = `http://www.omdbapi.com/?s=${req.query.search}&apikey=thewdb`;
  request(urlRequest, (error, response, body) => {
    if (!error && res.statusCode == 200){
      let data = JSON.parse(body);
      res.render('results', { data: data });
    }
  })
});

app.listen(process.env.PORT || 3000, () => console.log(`Movie app started`));
