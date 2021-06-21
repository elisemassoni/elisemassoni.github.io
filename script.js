let players = document.getElementsByClassName("player");
// let audios = [];
// for(let i = 0; i<players.length; i++){
//   let player = players[i];
//   let sound = player.getElementsByTagName("audio")[0];
//   audios.push(sound);
// }

for(let i = 0; i<players.length; i++){
  let player = players[i];
  let button = player.getElementsByClassName("play-pause")[0];
  button.addEventListener("click", function(){
    silenceAll();
    switchOn(player);
  });
  let sound = player.getElementsByTagName("audio")[0];
  let progressBar = player.getElementsByClassName("progress-bar")[0];
  sound.addEventListener("timeupdate", function(){
    let perc = (sound.currentTime/sound.duration)*100;
    progressBar.style.width = perc +"%";
  })
}

function silenceAll(){
  for(let i = 0; i<players.length; i++){
    let player = players[i];
    switchOff(player);
  }
}

function switchOn(player){
  let sound = player.getElementsByTagName("audio")[0];
  sound.play();

  let button = player.getElementsByClassName("play-pause")[0];
  button.innerHTML = "<p>stop</p>"
  button.style.backgroundColor = "white";
  button.style.color = "black";

}

function switchOff(player){
  let sound = player.getElementsByTagName("audio")[0];
  sound.pause();
  sound.currentTime = 0;

  let button = player.getElementsByClassName("play-pause")[0];
  button.innerHTML = "<p>play</p>"

  button.style.backgroundColor = "black";
  button.style.color = "white";

}
