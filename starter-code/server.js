// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  res.send('Guess a Number');
});
// Gallery View Route
app.get('/view', function(req, res){
  res.sendFile('/home/pengfei/wdi/express-routes-training/starter-code/views/index.html')
})

// The Number Guessing Game
app.get('/guess', function(req, res){
  var correct=10;
  if(parseInt(req.query.number)>correct){
    res.send("Too High")
  }
  if(parseInt(req.query.number)<correct){
    res.send("Too Low")}
  if(parseInt(req.query.number)===correct){res.send("Nailed It")
  }
})

// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
