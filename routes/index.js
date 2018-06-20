var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config()

const apiKey = process.env.api_key;

/* GET home page. */
router.get('/', function(req, res, next) {
  
    res.render('index')
  
});

router.post('/', function(req, res, next) {
  console.log(req.body.city);
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=imperial&appid=${apiKey}`)
    .then(data => {
      console.log(data.data.main);
      res.render('index', { data: data.data.main})
    
    })
});


module.exports = router;
