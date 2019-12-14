var global_json_data;
var header = document.querySelector('header');
var section = document.querySelector('section');
let artist = null;

function getSongs() {
  console.log(artist)
  var request = new XMLHttpRequest();
  request.open('GET',
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=36bd5dad9f52be6a14c9545c4541fda1&format=json`
  );
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var topSongs = request.response;
    showSongs(topSongs);
  }
}

function showSongs(jsonObj) {
  var songs = jsonObj.toptracks.track;

  const searchResults = document.querySelector('.searchResults');
  searchResults.innerHTML = '';

  for (var i = 0; i < songs.length; i++) {
    console.log(songs[i]);
    var mySong = document.createElement('song');
    var myH2 = document.createElement('h2');
    var myListeners = document.createElement('p');
    var myPlays = document.createElement('p');
    var myURL = document.createElement('p');

    myH2.textContent = songs[i].name;
    myListeners.textContent = 'Listeners: ' + songs[i].listeners;
    myPlays.textContent = 'Play Count: ' + songs[i].playcount;
    myURL.textContent = 'lastFM: ' + songs[i].url; 
    

    mySong.appendChild(myH2);
    mySong.appendChild(myListeners);
    mySong.appendChild(myPlays);
    mySong.appendChild(myURL);
    section.appendChild(mySong);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector('.searchForm-input').value;
  artist = input.trim();
  getSongs()
}

const form = document.querySelector('.searchForm');
form.addEventListener('submit', handleSubmit);

