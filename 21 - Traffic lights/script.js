function turnOnRed() {
  document.getElementById("crveno").style.backgroundColor = "red";
  document.getElementById("zuto").style.backgroundColor = "transparent";
  document.getElementById("zeleno").style.backgroundColor = "transparent";
  setTimeout(function () {
    turnOnYellowAndGreen();
  }, 10 * 1000);
}

function turnOnGreen() {
  document.getElementById("zeleno").style.backgroundColor = "lime";
  document.getElementById("zuto").style.backgroundColor = "transparent";
  document.getElementById("crveno").style.backgroundColor = "transparent";
  setTimeout(function () {
    turnOnYellowAndRed();
  }, 10 * 1000);
}

function turnOnYellowAndRed() {
  document.getElementById("zuto").style.backgroundColor = "yellow";
  document.getElementById("crveno").style.backgroundColor = "transparent";
  document.getElementById("zeleno").style.backgroundColor = "transparent";
  setTimeout(function () {
    turnOnRed();
  }, 3000);
}

function turnOnYellowAndGreen() {
  document.getElementById("zuto").style.backgroundColor = "yellow";
  document.getElementById("crveno").style.backgroundColor = "red";
  document.getElementById("zeleno").style.backgroundColor = "transparent";
  setTimeout(function () {
    turnOnGreen();
  }, 3000);
}

turnOnRed();

function getFormatted(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function showDateAndTime() {
  const date = new Date();
  const dateToShow =
    getFormatted(date.getDate()) +
    "/" +
    getFormatted(date.getMonth() + 1) +
    "/" +
    date.getFullYear();
  const timeToShow =
    getFormatted(date.getHours()) +
    ":" +
    getFormatted(date.getMinutes()) +
    ":" +
    getFormatted(date.getSeconds());
  document.getElementById("time").textContent = timeToShow;
  document.getElementById("date").textContent = dateToShow;
}

showDateAndTime();
setInterval(showDateAndTime, 1000);
