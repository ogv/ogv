function setStyleById(id, p, v) {
  var n = document.getElementById(id);
  n.style[p] = v;
}

// Play a video from the beginning
function play_pause(id) {
  setStyleById(id, "display", "inline");
  var video = document.getElementById(id);
  if (video.paused) {
    var time = video.currentTime
    video.currentTime = time;
    video.play();
  }
  else {
    video.pause();
  }
};

// Pause a playing video
// or
// Play a paused video
function pause(video) {
  var vid = document.getElementById(video);
  vid.pause();
}

// Stop a video, return to beginning or poster
function stop(video) {
  var vid = document.getElementById(video);
  vid.pause();
  vid.currentTime = 0;
}

function volUp(video) {
  var vid = document.getElementById(video);
  var mute = vid.muted;
  if (mute) {
    vid.muted = false;
  }
  else {
    var vol = vid.volume;
    if (vol <= .9) {
      vid.volume = vol + .1;
    }
  }
}

function volDown(video) {
  var vid = document.getElementById(video);
  var vol = vid.volume;
  if (vol >= .1) {
    vid.volume = vol - .1;
  }
}

function mute(video) {
  var vid = document.getElementById(video);
  var mute = vid.muted;
  if (mute) {
    vid.muted = false;
  }
  else {
    vid.muted = true;
  }
}

function showFilter() {
  setStyleById("content", "display", "none");
  setStyleById("filter", "display", "inline");
}

function applyFilter() {
  setStyleById("filter", "display", "none");
  setStyleById("content", "display", "inline");
  var script = document.filter_form.filter_text.value;
	var canvas = document.getElementById("bergen_processing_canvas");
	Processing(canvas, script);
}
