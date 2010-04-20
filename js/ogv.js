// Initialization on document ready
$(document).ready(function(){
  modeInit();
  //loadWave();
});


// Load up the development Wave.
// (should be called after document is ready)
// Uncomment from the init block to enable
// or fire "loadWave;" in your console.
function loadWave() {
  var wave =
    new WavePanel('http://wave.google.com/wave/');
  wave.setUIConfig('transparent', '#000', 'Trebuchet MS', '12pts');
  wave.loadWave('googlewave.com!w+qbzvDcFmA');
  wave.init(document.getElementById('waveframe'));
  $('img#wave_button').css('display','inline');
}

// Mode Changes
function modeInit() {
  var wave = false;
  var timeline = false;
  var filter = false;
  var clip = false;

  $('a#wave_button').click(function(event){
    if (wave == false) {
      $('div#waveframe').css('right','208px');
      wave = true
    } else {
      $('div#waveframe').css('right','-1000px');
    }
  });

  $('a#clip_button').click(function(event){
    if (clip == false) {
      alert('false');
      clip = true;
    } else {
      alert('true');
    }
  });
}

// Play Controls

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

// Volume
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
