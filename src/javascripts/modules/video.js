
window.onload = function() {
  var video = document.getElementById('video');
  video.onclick = function() {
     if (video.paused) {
        video.play();
     } else {
        video.pause();
     }
  }
};

const progressBar = document.querySelector('.progress-bar');
const progressBarFill = document.querySelector('.progress-bar-fill');
const videoElement = document.querySelector('#video');
const videoWrapper = document.querySelector('.video__wrapper');
const btnReset = document.querySelector('#repeat');
const btnExpand = document.querySelector('#fullscreen');
const videoControls = document.querySelector('.video__controls');

const showControls = () => {
  videoControls.classList.remove('video__controls-hidden');
  videoControls.classList.add('video__controls-show');
}

const hideControls = () => {
  videoControls.classList.add('video__controls-hidden');
  videoControls.classList.remove('video__controls-show');
}

const restartVideo = () => {
  videoElement.currentTime = 0;
}

const expandVideo = () => {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    // Version for Firefox
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) {
    // Version for Chrome and Safari
    videoElement.webkitRequestFullscreen();
  }
}

//volume slider

window.SetVolume = function(val)
{
    console.log('Before: ' + videoElement.volume);
    videoElement.volume = val / 100;
    console.log('After: ' + videoElement.volume);
}


btnReset.addEventListener('click', restartVideo, false);
btnExpand.addEventListener('click', expandVideo, false);
videoWrapper.addEventListener('mouseenter', showControls, false);
videoWrapper.addEventListener('mouseleave', hideControls, false);
