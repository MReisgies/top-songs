var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/static', express.static('public'));
/* app.use('/static', express.static('public/js'));
app.use('/static', express.static('public/images')); */
 
var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});