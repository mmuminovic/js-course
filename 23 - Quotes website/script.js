fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data);
  })
  .catch(function (err) {
    console.log("err", err);
  });
