import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, 
  plugins: [new Autoplay(), new AutoPause()] 
});
  
const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker. register ('/sw.js').catch(error => {
    console.log(error.message);
  });
}