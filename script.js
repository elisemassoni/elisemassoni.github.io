let buttonsize = 100;
let playButton = document.getElementById("playButton")
let track = document.getElementById("track")
let buttonText = playButton.getElementsByTagName("p")[0];
let trackNames = document.getElementsByClassName("trackName")
let currentTimeDisplay = document.getElementById("currentTimeDisplay")
let activeColor = "#3880ff"
// let canPlay = false;
let unlockSkipping = document.getElementById("unlockSkipping")
let allowSkip = false;



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
	// console.log(time)
	if(time < convertToSeconds("4.17")){
    changeActiveTrack(0);
  }else if(time < convertToSeconds("5.39")){
    changeActiveTrack(1);
  }else if(time < convertToSeconds("6.40")){
    changeActiveTrack(2);
  }else if(time < convertToSeconds("7.15")){
    changeActiveTrack(3);
  }else if(time < convertToSeconds("8.10")){
    changeActiveTrack(4);
  }else if(time < convertToSeconds("8.55")){
    changeActiveTrack(5);
  }else if(time < convertToSeconds("10.15")){
    changeActiveTrack(6);
  }else if(time < convertToSeconds("11.49")){
    changeActiveTrack(7);
  }else if(time < convertToSeconds("13.17")){
    changeActiveTrack(8);
  }else if(time < convertToSeconds("14.20")){
    changeActiveTrack(9);
  }else if(time < track.duration){
    changeActiveTrack(10);
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
	// console.log(minSec, Math.floor(minSec)*60+(minSec-Math.floor(minSec)))
  return Number(String(minSec).split(".")[0]*60)+Number(String(minSec).split(".")[1])
}

function changeActiveTrack(num){
  for(let i = 0; i< trackNames.length; i++){
    trackNames[i].style.color="black"
  }
  trackNames[num].style.color = activeColor
}

function isPlaying(audelem) { return !audelem.paused; }









// skip tracks

let desiredTrack = null;

for(let i = 0; i <trackNames.length; i++){
	trackNames[i].addEventListener("click", function(){
		desiredTrack = i;
		console.log(desiredTrack, i)
		if(!allowSkip){
			console.log(i);
			document.getElementById('skipWarning').style.display = "block";
			// document.getElementById('skipWarning').scrollIntoView({ behavior: 'smooth' } );
			scrollToSection('skipWarning');
		}else{
			skiptotrack(desiredTrack)
		}

	})

}

unlockSkipping.addEventListener("click", function(){
	allowSkip = true;
	skiptotrack(desiredTrack);
	// document.getElementById('textWrapper').scrollIntoView({ behavior: 'smooth' } );
	scrollToSection("textWrapper")
	setTimeout(function(){
		document.getElementById('skipWarning').style.display = "none";

	}, 1000)

})


function skiptotrack(num){
	console.log("skipping to", num);

	if(num == 0){
		track.currentTime = convertToSeconds("0.0");
	}else if(num == 1){
		track.currentTime = convertToSeconds("4.20");
	}else if(num == 2){
		track.currentTime = convertToSeconds("5.43");
	}else if(num == 3){
		track.currentTime = convertToSeconds("6.45");
	}else if(num == 4){
		track.currentTime = convertToSeconds("7.20");
	}else if(num == 5){
		track.currentTime = convertToSeconds("8.11");
	}else if(num == 6){
		track.currentTime = convertToSeconds("9.09");

	}else if(num == 7){
		track.currentTime = convertToSeconds("10.17");

	}else if(num == 8){
		track.currentTime = convertToSeconds("11.50");

	}else if(num == 9){
		track.currentTime = convertToSeconds("13.22");

	}else if(num == 10){
		track.currentTime = convertToSeconds("14.23");

	}

	if(!isPlaying(track)){
		playTrack()
	}
}




//https://stackoverflow.com/a/65644070

function scrollToSection(name) {
  // if (supportsSmoothScrolling()) {
  //   return;
  // }
  // event.preventDefault();
  const scrollToElem = document.getElementById(name);
  SmoothVerticalScrolling(scrollToElem, 1000, "top");
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = 'smooth';
  const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
};

function SmoothVerticalScrolling(element, time, position) {
  var eTop = element.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == "center" || position == "")
  window.scrollBy(0, eAmt / 2);
  if (position == "top")
  window.scrollBy(0, eAmt);
}
