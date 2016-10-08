const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const router = express.Router();
const app = express();

const config = require('../config/app-config');

const barnivoreBeerApiUrl = 'http://barnivore.com/beer.json';
const barnivoreSearchApiUrl = 'http://barnivore.com/search.json?keyword=';

router.get('/api/beers', (req, res) => {
  request(barnivoreBeerApiUrl, (error, response, body) => {
    if (error) {
      res.json({
        error: error
      });

      return;
    }

    if (response.statusCode !== 200) {
      res.json({
        error: {
          status: response.statusCode
        }
      });

      return;
    }

    res.json({
      beers: JSON.parse(body)
    });
  });
});

router.get('/api/beers/search/:beer', (req, res) => {
  request(barnivoreSearchApiUrl + req.params.beer, (error, response, body) => {
    if (error) {
      res.json({
        error: error
      });

      return;
    }

    if (response.statusCode !== 200) {
      res.json({
        error: {
          status: response.statusCode
        }
      });

      return;
    }

    res.json({
      beers: JSON.parse(body)
    });
  });
});

app.use('/', router);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(config.port, () => {
  console.log(`App is running on port ${config.port}`);
});
