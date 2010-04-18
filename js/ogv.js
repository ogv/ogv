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
    setStyleById("play_button", "display", "none");
    setStyleById("pause_button", "display", "inline");
  }
  else {
    video.pause();
    setStyleById("pause_button", "display", "none");
    setStyleById("play_button", "display", "inline");
  }
};

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
  setStyleById("workbench", "width", "75%");
  setStyleById("filter", "display", "inline");
}

function applyFilter() {
  setStyleById("workbench", "width", "25%");
  setStyleById("filter", "display", "none");
  var script = document.filter_form.filter_text.value;
	var canvas = document.getElementById("bergen_processing_canvas");
	Processing(canvas, script);
}
