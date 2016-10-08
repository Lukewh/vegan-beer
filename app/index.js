const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const url = require('url');

const router = express.Router();
const app = express();

const config = require('../config/app-config');

const barnivoreBeerApiUrl = 'http://barnivore.com/search.json';

router.get('/api/beer', (req, res) => {
  const urlParts = url.parse(req.url, true);
  const searchQuery = urlParts.query.search;
  const apiUrl = `${barnivoreBeerApiUrl}?keyword=${searchQuery}`;

  request(apiUrl, (error, response, body) => {
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
