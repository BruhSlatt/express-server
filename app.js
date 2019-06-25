//requiring package and storing it in express variable 
const express = require('express');

// calling function express and storing it's value in a variable 
const app = express();

// routing any traffic going to root url and sending back a response 
app.get('/', function(request, response){
    response.send('landing page');
});

// routing any traffic that going to /jerry and sending back a response
app.get('/jerry', function(req, res){
    res.send("you are in my page sir or madaam")

});

//  app is listening for request on port 3000
app.listen(3000);

// 
console.log("server is live port 3000");