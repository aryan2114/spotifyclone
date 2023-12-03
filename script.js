console.log("Welcome to my spotify")
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let masterpause = document.getElementById('masterpause');
let myProgressBar = document.getElementById('myProgressBar');

//Listen to songs
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime==0){
    audioElement.play();
    
  }})
masterpause.addEventListener('click',()=>{
    if(audioElement.play || audioElement.currentTime>=0){
      audioElement.pause();
      
    }
})
audioElement.addEventListener('timeupdate',()=>{
  console.log("timeUpdate");
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})