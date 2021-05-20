const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('search')
});

app.get('/result', function(req, res){
  let searchedUser = req.query.username
  var options = {
    url: 'https://api.github.com/users/' + searchedUser,
    headers: {
      'User-Agent': 'request'
    }
  };
    request(options, function(error, response, body){
        if (!error && response.statusCode == 200){
            let info = JSON.parse(body);
            res.render('result', {data: info})
        }
    });
    
});



app.listen('3000', function () {
   console.log('github checker server has started') 
});