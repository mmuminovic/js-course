// Kobajagi asinhrona funkcija
async function calculateSum(a, b) {
  return new Promise(function (resolve, reject) {
    // NaN = Not a Number
    // isNaN(a) - a nije broj
    // !isNaN(a) - a jeste broj
    // isNaN(a) => true or false
    if (!isNaN(a) && !isNaN(b)) {
      resolve({ a: a, b: b, sum: a + b });
    } else {
      reject("Uneti brojevi nisu ispravni");
    }
  });
}

// var result = calculateSum(2, 3);
// calculateSum(2, 3).then().catch();
// calculateSum(2, "a") ===> vraca error u catch bloku
calculateSum(2, 2)
  .then(function (result) {
    /*
    u then se nalazi funkcija koja ce da handluje podatke
    koje smo dobili nakon sto je promise uspesno zavrsen
    */
    // prikazi korisniku podatke koje je trazio
    // document.write(result.sum);
  })
  .catch(function (error) {
    // prikazi korisniku poruku da nesto nije u redu sa internetom
    // console.log("error", error);
    // document.write(error);
  });

// fetch - asinhrona funkcija koja nam sluzi da saljemo zahteve (requests) na server
fetch("https://jsonplaceholder.typicode.com/posts/100")
  .then(function (result) {
    return result.json();
  })
  .then(function (result2) {
    console.log("FETCH RESPONSE", result2);
  })
  .catch(function (error) {
    console.log("FETCH ERROR", error);
  });

// default method = GET
// other methods: POST, PUT, PATCH, DELETE

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // za kreiranje novih resursa
  body: JSON.stringify({
    title: "itcamp",
    body: "Test test test",
    userId: 999,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// var user = {
//   name: "Muhamed",
// };

// console.log(JSON.stringify(user));
