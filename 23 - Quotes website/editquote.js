const urlParams = new URLSearchParams(window.location.search);
const quoteId = urlParams.get("quoteId");

console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  })
  .catch((err) => {
    console.log(err);
  });

document.getElementById("submitChanges").addEventListener("click", () => {
  const quoteText = document.getElementById("quoteText").value;
  const quoteAuthor = document.getElementById("quoteAuthor").value;
  const quoteSource = document.getElementById("quoteSource").value;

  const newData = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };

  fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
    method: "PATCH",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth_token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Uspesno ste editovali citat");
    })
    .catch(() => {
      alert("nesto nije u redu");
    });
});
