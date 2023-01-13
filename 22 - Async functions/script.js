// Kobajagi asinhrona funkcija
async function calculateSum(a, b) {
  return new Promise(function (resolve, reject) {
    // NaN = Not a Number
    // isNaN(a) - a nije broj
    // !isNaN(a) - a jeste broj
    // isNaN(a) => true or false
    if (!isNaN(a) && !isNaN(b)) {
      resolve(a + b);
    } else {
      reject("Uneti brojevi nisu ispravni");
    }
  });
}

// calculateSum(2, 3).then().catch();
// calculateSum(2, "a") ===> vraca error u catch bloku
calculateSum(2, 3)
  .then(function (result) {
    /* 
    u then se nalazi funkcija koja ce da handluje podatke 
    koje smo dobili nakon sto je promise uspesno zavrsen
    */
    // prikazi korisniku podatke koje je trazio
    console.log("result", result);
  })
  .catch(function (error) {
    // prikazi korisniku poruku da nesto nije u redu sa internetom
    console.log("error", error);
  });

// fetch - asinhrona funkcija koja nam sluzi da saljemo zahteve (requests) na server
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    console.log("FETCH RESPONSE", result);
  })
  .catch(function (error) {
    console.log("FETCH ERROR", error);
  });
