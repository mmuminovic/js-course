var goals = [];

var minutes = 0;
var seconds = 0;

setInterval(function () {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  var minutesToShow = minutes;
  var secondsToShow = seconds;

  if (seconds < 10) {
    secondsToShow = "0" + secondsToShow;
  }

  if (minutes < 10) {
    minutesToShow = "0" + minutesToShow;
  }

  document.getElementById("time").textContent =
    minutesToShow + ":" + secondsToShow;
}, 1000);

document.getElementById("addGoal").addEventListener("click", function () {
  // Uzimamo vrednosti
  var min = minutes + 1;
  var player = document.getElementById("score").value;
  var team = document.getElementById("team").value;

  var imgSrc;

  var event = document.getElementById("event").value;

  switch (event) {
    case "yellowcard":
      imgSrc =
        "https://cdn1.vectorstock.com/i/1000x1000/99/90/soccer-referees-hand-with-yellow-card-vector-1169990.jpg";
      break;
    case "redcard":
      imgSrc =
        "https://media.istockphoto.com/id/157679439/photo/red-card.jpg?s=612x612&w=0&k=20&c=AfuyasC4B4W7qHqeZtkuwSesvW7S5Fl5LoclDvTR4VY=";
      break;
    default:
      imgSrc =
        "https://img.freepik.com/premium-vector/soccer-ball-icon-logo-template-football-logo-symbol_7649-4092.jpg?w=2000";
      break;
  }

  var date = new Date();
  var dateOfGoal =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  console.log(dateOfGoal);
  var timeOfGoal = date.getHours() + ":" + date.getMinutes();
  console.log(timeOfGoal);
  console.log(date);

  // Smestamo vrednosti u objekat kao propertiji
  var goal = {
    min: min,
    player: player,
    team: team,
    img: imgSrc,
    date: date,
  };

  // console.log(goal.date.getFullYear());

  if (event === "goal") {
    document.getElementById("goal-gif").style.display = "block";

    setTimeout(function () {
      document.getElementById("goal-gif").style.display = "none";
    }, 3000); // milisekunde ==> 1 sekunda = 1000 milisekundi
  }

  // Objekat saljemo u niz goals
  goals.push(goal);

  // Ocistimo unete vrednosti iz input polja i spremimo ih za sledeci unos
  // document.getElementById("min").value = "";
  document.getElementById("score").value = "";
  document.getElementById("team").value = "";

  // Parent ul html element
  var listOfGoalsElement = document.getElementById("listOfGoals");

  // Izbrisemo sve sto je pre toga bilo u listi da bi opet ispocetka ubacili sve elemente
  listOfGoalsElement.innerHTML = "";

  var moroccoGoals = 0;
  var franceGoals = 0;

  goals.forEach(function (item, index) {
    var goalElement = document.createElement("li");

    goalElement.innerHTML =
      '<img src="' +
      item.img +
      '" width="20px">' +
      item.min +
      " - " +
      item.player;

    if (item.team === "France") {
      goalElement.style =
        "display:flex; align-items: center; justify-content: flex-end";
      franceGoals++;
    } else {
      goalElement.style = "display:flex; align-items: center;";
      moroccoGoals++;
    }

    listOfGoalsElement.appendChild(goalElement);
  });

  // Ispisujemo rezultat
  document.getElementById("moroccoScore").textContent = moroccoGoals;
  document.getElementById("franceScore").textContent = franceGoals;
  console.log(goals);
});

// var colorInt = 255;

// setInterval(function(){
//   // rgb(214, 59, 0); ===> red, green, blue ===> 0-255
//   document.getElementById('body').style.backgroundColor = "rgb("+colorInt + "," + colorInt + "," + colorInt + ")"

//   if(colorInt > 0){
//     colorInt--;
//   }
//   // rgb(255, 255, 255)
//   // rgb(254, 254, 254)

// }, 100);

// setInterval(function(){
//   document.getElementById('goal-gif').style.display = "block";
//   setTimeout(function(){
//     document.getElementById('goal-gif').style.display = "none";
//   }, 2500)
// }, 5000);

// var time = 1;
// setInterval(function(){
//   if(time<90){
//     time++;
//   } else if(typeof time === 'number') {
//     time = time + "+"
//   }
//   document.getElementById('time').textContent = time;

// }, 1000*60);

// setInterval(function () {
//   console.log("Hello from setInterval!");
// }, 2 * 1000); // 1 sec = 1000 miliseconds

// Dates
// var date = new Date();
// date.setMonth(5);
// console.log(date);
