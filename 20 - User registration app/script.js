var users = [];

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.role = "user";
    var randomNumber = Math.random(); // 0.1234534364563
    var numberToString = String(randomNumber); // "0.1234534364563"
    var partsOfString = numberToString.split("."); // ["0", "1234534364563"]
    this.id = partsOfString[1];
  }
}

document.getElementById("submit").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = new User(username, password);
  users.push(user);

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

class UserToDisplay {
  constructor(user) {
    this.username = user.username;
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    // this.dateOfShowAll = new Date(); ===> mogu da dodam neke nove property-e ako hocu
  }
}
document.getElementById("showAll").addEventListener("click", function () {
  var usersWithoutPassword = users.map(function (user, index) {
    var userNoPass = new UserToDisplay(user);
    return userNoPass;
  });
  document.getElementById("data").innerHTML = JSON.stringify(
    usersWithoutPassword,
    null,
    4
  );
});
