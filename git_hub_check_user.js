const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');

var options = {
  url: 'https://api.github.com/users/okumagbarukevwe',
  headers: {
    'User-Agent': 'request'
  }
};

app.get('/', function(req, res){
    res.render('search')
});

app.get('/result', function(req, res){
    request(options, function(error, response, body){
        if (!error && response.statusCode == 200){
            let info = JSON.parse(body);
            console.log(info['login'])
            // res.send(info['login'])
            res.send(info['avatar_url'])
            // res.send(info['id'])
            // res.send(info['followers'])
            // res.send(info['following'])
        }
    });
    
});



app.listen('3000', function () {
   console.log('github checker server has started') 
});