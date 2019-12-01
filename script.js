var id1 = document.getElementById("id1");
var daten = document.getElementById("daten");
var json;

// Diese Zeilen erzeugen den Button und die Box Auszufüllen
document.getElementById("requestButton").addEventListener("click",function (evt)  {
    console.log("Button", evt.target, "wurde geklickt")
    var songName = document.getElementById("songName")
    console.log("Song Name", songName.value)

    fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=36bd5dad9f52be6a14c9545c4541fda1&artist=cher&track=believe&format=json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      json = JSON.stringify(myJson)
        console.log(json);
      daten.innerHTML =json;
    });

    
  
  
      });
  
