var quotes = [];

function renderQuotes() {
  var parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  quotes.forEach(function (item, index) {
    var childEl = document.createElement("li");
    childEl.textContent = item.quoteText + " - " + item.quoteAuthor;
    parentEl.appendChild(childEl);
  });
}

fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quotes = data;
    renderQuotes();
  })
  .catch(function (err) {
    console.log("err", err);
  });
