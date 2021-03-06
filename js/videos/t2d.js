// Load the IFrame Player API code asynchronously.


  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  var player;
  var t2d = 'PL4Q5STdNYMWqJKAlLR7CKqSbM6pyprO-9'
  function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('t2d-video', {
      height: '390',
      width: '640',
      // videoId: 'ULi3tQsAoqs',
      playerVars: {
        // autoplay: 1,
        listType: 'playlist',
        list: t2d
      }
    });
  }

var Notify = (function(){

  if ($('body').width > 1024) {
    function init(){
      message = "You are able to navigate videos by using the dropdown menu in the upper left hand corner of the screen. Enjoy!"  
      confirm(message);
    }
  };

  var message;

  return {
    init: init
  }

})();

$(document).ready(Notify.init);


