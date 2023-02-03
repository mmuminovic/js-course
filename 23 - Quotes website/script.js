let quotes = [];
let allQuotes = [];

const likeQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
};

const deleteQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  }).then((response) => {
    getQuotes();
  });
};

const renderQuotes = () => {
  const parentEl = document.getElementById("list");
  parentEl.innerHTML = "";
  quotes.forEach(function (item, index) {
    const childEl = document.createElement("li");
    const quoteTextEl = document.createElement("p");
    const quoteLikesEl = document.createElement("p");
    const likeEl = document.createElement("img");
    const editEl = document.createElement("img");
    const deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    quoteLikesEl.textContent = "Likes: " + item.likes;

    likeEl.src = "like.png";
    likeEl.style = "width: 30px";
    likeEl.onclick = function () {
      likeQuote(item._id);
    };

    editEl.src = "edit.png";
    editEl.style = "width: 30px";
    editEl.onclick = function () {
      window.location.href = "edit-quote.html?quoteId=" + item._id;
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 30px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };

    childEl.appendChild(quoteTextEl);
    childEl.appendChild(quoteLikesEl);
    childEl.appendChild(likeEl);

    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      childEl.appendChild(editEl);
      childEl.appendChild(deleteEl);
    }

    parentEl.appendChild(childEl);
  });
};

const getQuotes = () => {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;
      allQuotes = data;
      renderQuotes();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

getQuotes();

document.getElementById("search").addEventListener("keydown", () => {
  const searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter((item, index) => {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});
