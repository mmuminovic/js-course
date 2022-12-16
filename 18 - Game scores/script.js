var goals = [];

document.getElementById("addGoal").addEventListener("click", function () {
  // Uzimamo vrednosti
  var min = document.getElementById("min").value;
  var player = document.getElementById("score").value;
  var team = document.getElementById("team").value;

  // Smestamo vrednosti u objekat kao propertiji
  var goal = {
    min: min,
    player: player,
    team: team,
  };

  // Objekat saljemo u niz goals
  goals.push(goal);

  // Ocistimo unete vrednosti iz input polja i spremimo ih za sledeci unos
  document.getElementById("min").value = "";
  document.getElementById("score").value = "";
  document.getElementById("team").value = "";

  // Parent ul html element
  var listOfGoalsElement = document.getElementById('listOfGoals');

  // Izbrisemo sve sto je pre toga bilo u listi da bi opet ispocetka ubacili sve elemente
  listOfGoalsElement.innerHTML = ""

  var moroccoGoals = 0;
  var franceGoals = 0;

  goals.forEach(function(item, index){
    var goalElement = document.createElement('li');
    goalElement.textContent = item.min + ' - ' + item.player;

    if(item.team === 'France'){
        goalElement.style = "text-align: right;"
        franceGoals++;
    } else {
        moroccoGoals++;
    }

    listOfGoalsElement.appendChild(goalElement);
  });

  // Ispisujemo rezultat
  document.getElementById('moroccoScore').textContent = moroccoGoals;
  document.getElementById('franceScore').textContent = franceGoals;
});
