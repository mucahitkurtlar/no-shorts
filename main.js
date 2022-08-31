// Add an event listener to yt-navigate-start
// Because YouTube doesn't reload pages on navigation,
// it replaces the history state
document.addEventListener('yt-navigate-start', checkShorts);

if (document.body) checkShorts();
else document.addEventListener('DOMContentLoaded', checkShorts);

function checkShorts() {
  if (window.location.pathname.startsWith("/shorts/")) {
    redirectToWatch();
  }
}

function redirectToWatch() {
  var videoId = window.location.pathname.split('/')[2];
  var videoURL = 'https://www.youtube.com/watch?v=' + videoId;
  window.location.href = videoURL;
}