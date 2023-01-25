const urlParams = new URLSearchParams(window.location.search);
const quoteId = urlParams.get("quoteId");

console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  })
  .catch(function (err) {
    console.log(err);
  });

document.getElementById("submitChanges").addEventListener("click", function () {
  var quoteText = document.getElementById("quoteText").value;
  var quoteAuthor = document.getElementById("quoteAuthor").value;
  var quoteSource = document.getElementById("quoteSource").value;

  var newData = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };

  fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
    method: "PATCH",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      alert("Uspesno ste editovali citat");
    })
    .catch(function () {
      alert("nesto nije u redu");
    });
});
