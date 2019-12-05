var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function renderTimeToPage(){
  var displayMinutes = Math.floor((totalSeconds-secondsElapsed)/60);
  var displaySeconds = (totalSeconds-secondsElapsed)%60;
  // console.log(displayMinutes,displaySeconds);
  if(displayMinutes<10){
    displayMinutes = '0' + displayMinutes;
  }
  if(displaySeconds<10){
    displaySeconds = '0' + displaySeconds;
  }
  minutesDisplay.textContent = displayMinutes;
  secondsDisplay.textContent = displaySeconds;
}

function startTimer() {
  // Write code to start the timer here
  // console.log("play clicked");
  clearInterval(interval);
  var minutes = workMinutesInput.value;
  totalSeconds = minutes * 60;
  // console.log(minutes, totalSeconds);
  interval= setInterval(function(){
    secondsElapsed++;
    renderTimeToPage();
    if(totalSeconds-secondsElapsed<=0){
      clearInterval(interval);
      alert("time for a break!")
    }
    // console.log(totalSeconds-secondsElapsed);
  },1000)

}

function stopTimer(){
  clearInterval(interval);
  secondsElapsed = 0;
  renderTimeToPage();
}

function pauseTimer() {
  clearInterval(interval);
}

playButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
