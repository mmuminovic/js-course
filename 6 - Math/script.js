document.getElementById("calculate").addEventListener("click", function () {
  var randomNumber = Math.random() * 101;
  var intNumber = Math.floor(randomNumber);

  //   var name1 = document.getElementById("name1").value;
  //   var name2 = document.getElementById("name2").value;

  document.getElementById("result").textContent = intNumber + "%";
});
