
  // Filter Apply Button
  function applyFilter() {
    $('div#filter').hide();
    $('div#workbench').css('width','160px');
    $('div#license').show('slow');
    var script = document.filter_form.filter_text.value;
    var canvas = document.getElementById("canvas");
    Processing(canvas, script);
  } 

// Initialization on document ready
$(document).ready(function(){
  modeInit();
  loadWave();


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

// sammy.js

$(function() { app.run(); });

var app =  $.sammy(function() {
 this.get('#/create', function() {
    $('div#license').hide();
    $('div#workbench').css('width','75%');
    $('div#filter').show('slow');
  });
});

// Mode Changes
function modeInit() {
  var wave = false;
  var timeline = false;
  var filter = false;
  var clip_bin = false;
  var filter = false;

  $('a#wave_button').click(function(event){
    if (wave == false) {
      $('div#waveframe').css('right','144px');
      wave = true;
    } else {
      $('div#waveframe').css('right','-1000px');
      wave = false;
    }
  });

  $('a#filter_button').click(function(event){
    if (filter == false) {
      $('div#workbench').css('width','75%');
      $('div#license').hide();
      $('div#filter').show('slow');
      filter = true;
    } else {
      $('div#workbench').css('width','160px');
      $('div#filter').hide();
      $('div#license').show('slow');
      filter = false;
    }
  });


  $('a#clip_button').click(function(event){
    if (clip_bin == false) {
      $('div#workbench').css('width','75%');
      $('div#clip_bin').css('display','inline');
      clip_bin = true;
    } else {
      $('div#clip_bin').css('display','none');
      $('div#workbench').css('width','144px');
      clip_bin = false;
    }
  });

  // Play Controls
  function play_pause() {
    if (paused) {
      var video = document.getElementById('video');
      video.play();
      $('img#play_button').hide();
      $('img#pause_button').show();
      paused = false;
    } else {
      var video = document.getElementById('video');
      video.pause();
      $('img#pause_button').css('display','none');
      $('img#play_button').css('display','inline');
      paused = true;
    }
  };
  
  var paused = true;
  $('a#play_pause_button').click(function(event){
    $('#screen').show('slow');
    play_pause();
  });
  
  $('a#pause_button').click(function(event){
    play_pause();
  });


}
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
