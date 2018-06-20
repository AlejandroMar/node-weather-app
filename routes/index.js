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
      console.log("http://openweathermap.org/img/w/" + data.data.weather[0].icon +".png");
      res.render('index', { data: data.data.main, icon: `http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`})
    
    })
});


module.exports = router;
