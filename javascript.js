let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").textContent = display;
}

function pad(number) {
  return number < 10 ? `0${number}` : number;
}
