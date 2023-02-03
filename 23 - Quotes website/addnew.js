const token = localStorage.getItem("auth_token");
if (!token) {
  window.location.href = "index.html";
}

document.getElementById("addNew").addEventListener("click", () => {
  const text = document.getElementById("quoteText").value;
  const author = document.getElementById("quoteAuthor").value;
  const source = document.getElementById("quoteSource").value;

  const newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };

  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth_token"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("quoteSource").value = "";
      document.getElementById("quoteText").value = "";
      document.getElementById("quoteAuthor").value = "";
      alert("Vas citat je uspesno dodat");
    })
    .catch((error) => {
      console.log("error:", error);
    });
});
