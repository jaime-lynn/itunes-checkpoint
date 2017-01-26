function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  var musicPreview = function(){
      var a = document.querySelectorAll('a');
      audio = document.getElementById('preview');
      audio.pause();
      for(var i = 0; i < a.length; i++){
        a[i].addEventListener('click', function(){
            var previewURL = this.getAttribute('value');
            if(audio.getAttribute('src') == previewURL) {
              audio.pause();
            } else {
            audio.setAttribute('src', previewURL);
            audio.play();
            }
        });
      }
    }

  function drawSongs(songList){
    // console.log(songList);
    // This is where you task begins
    var template = '';
    for(var i = 0; i < songList.length; i++) {
        song = songList[i];
        thumbnail = song.albumArt || 'http://placehold.it/70x70';
        template += `<tr>
                        <td><img src="${thumbnail}" class="thumbnail"></td>
                        <td>${song.artist}</td>
                        <td><a value="${song.preview}"><span class="glyphicon glyphicon-play" aria-hidden="true"></span> ${song.title}</a></td>
                        <td>${song.collection}</td>
                        <td>${song.price}</td>
                    </tr>`
    }
    document.getElementById('songs').innerHTML = template;
    musicPreview();
  }

}



var itunesCtrl = new ItunesController()
