let buttonsize = 100;
let playButton = document.getElementById("playButton")
let track = document.getElementById("track")
let buttonText = playButton.getElementsByTagName("p")[0];
let trackNames = document.getElementsByClassName("trackName")
let currentTimeDisplay = document.getElementById("currentTimeDisplay")
let activeColor = "#3880ff"
// let canPlay = false;

enterView({
	selector: '#spacer',
	progress: function(el, progress) {
		// console.log(progress);
    let windowWidth = window.innerWidth;
    let buttonWidth = buttonsize + ( (windowWidth-buttonsize) * (progress/1) );
    // console.log(buttonWidth)
    playButton.style.width = buttonWidth + "px"
    let buttonBorderRadius = (1-(progress/1)) * (buttonsize/2);
    playButton.style.borderRadius = buttonBorderRadius + "px"

	},
	offset: 1, // enter at middle of viewport
});


playButton.addEventListener("click", function(){
  // if(canPlay){
    if(!isPlaying(track)){
      playTrack()
    }else{
      pauseTrack();
    }
  // }
})

function playTrack(){
  // console.log("play")
  track.play();
  buttonText.innerHTML = "pause";
}
function pauseTrack(){
  // console.log("pause")
  track.pause();
  buttonText.innerHTML = "play";
}

track.addEventListener("timeupdate", function(){
  // console.log(track.currentTime)
  let time = track.currentTime;
  let minDisplay = String(Math.floor(time/60)).padStart(2, '0')
  let secDisplay = String(Math.floor(time%60)).padStart(2, '0')
  currentTimeDisplay.innerHTML =  minDisplay + "." + secDisplay
  if(time < convertToSeconds(4.17)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(5.39)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(6.40)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(7.15)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(8.10)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(8.55)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(10.15)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(11.49)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(13.17)){
    changeActiveTrack(0);
  }else if(time < convertToSeconds(14.20)){
    changeActiveTrack(0);
  }else if(time < track.duration){
    changeActiveTrack(0);
  }
})

track.addEventListener("canplay", function(){
  console.log("can play");
  // buttonText.innerHTML="play";
  // canPlay = true;
})
track.addEventListener("canplaythrough", function(){
  console.log("can play through")
})
track.addEventListener("onstalled", function(){
  console.log("stalled")
})


function convertToSeconds(minSec){
  return Math.floor(minSec)*60+(minSec-Math.floor(minSec))
}

function changeActiveTrack(num){
  for(let i = 0; i< trackNames.length; i++){
    trackNames[i].style.color="black"
  }
  trackNames[num].style.color = activeColor
}

function isPlaying(audelem) { return !audelem.paused; }
