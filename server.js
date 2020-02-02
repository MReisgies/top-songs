var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static('D:\Projects\GlitchProjects\lastFM_web\public\css'));
app.use('/js', express.static('D:\Projects\GlitchProjects\lastFM_web\public\js'));
app.use('/images', express.static('D:\Projects\GlitchProjects\lastFM_web\public\pictures'));
 
var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});