document.getElementById("showText").addEventListener("click", function () {
  var firstName, lastName, age, myText, finalText;
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  age = document.getElementById("age").value;
  myText = document.getElementById("myText").value;
  finalText =
    "Ja, " +
    firstName +
    " " +
    lastName +
    ", " +
    age +
    " godina, " +
    "izjavljujem sledece: " +
    myText;

  document.getElementById("result").textContent = finalText;

  var message = "Ova poruka sadrzi " + finalText.length + " karaktera";
  document.getElementById("message").textContent = message;
});
