document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const fullName = document.getElementById("fullName").value;

  const loginData = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    fullName: fullName,
  };

  fetch("https://js-course-server.onrender.com/user/signup", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.userId) {
        // uspesno
        alert("Uspesna regisracija");
        window.location.href = "login.html";
      } else {
        // neuspesno
        alert("Neuspesno");
      }
    });
});
