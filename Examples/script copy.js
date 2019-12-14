var id1 = document.getElementById("id1");
var daten = document.getElementById("daten");
var json;

// Diese Zeilen erzeugen den Button und die Box Auszufüllen
document.getElementById("requestButton").addEventListener("click",function (evt)  {
    console.log("Button", evt.target, "wurde geklickt")
    var songName = document.getElementById("songName")
    console.log("Song Name", songName.value)

    fetch('https://api.github.com/users/pfisterer/repos')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      json = JSON.stringify(myJson)
        console.log(json);
      daten.innerHTML =json;
    });

    

  // Jetzt wollen wir das Listeneinträge erzeugt werden können
    var songCard = document.createElement("songCard")
   
    var lastFM = document.createElement(lastFM)
    lastFM.innerHTML = json
    
    songCard.appendChild(lastFM)
  
    var body = document.getElementsByTagName("body")[0]
    body.appendChild(songCard)
  
  // Die Song Cards können durch Anklicken gelöscht werden
    songCard.addEventListener("click", function (evt) {
      console.log("Ich soll gelöscht werden.")
      songCard.parentElement.removeChild(songCard);
  
      });
  
});
