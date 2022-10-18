var finalValue; // Rezultat
// finalValue === undefined
var currentValue = 0; // Number s kojim cemo da radimo (sabiranje mnozenje itd)
var op = ""; // Operacija koju smo izabrali

document.getElementById("one").addEventListener("click", function () {
  currentValue = currentValue * 10 + 1;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("two").addEventListener("click", function () {
  currentValue = currentValue * 10 + 2;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("three").addEventListener("click", function () {
  currentValue = currentValue * 10 + 3;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("four").addEventListener("click", function () {
  currentValue = currentValue * 10 + 4;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("five").addEventListener("click", function () {
  currentValue = currentValue * 10 + 5;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("six").addEventListener("click", function () {
  currentValue = currentValue * 10 + 6;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);

  document.getElementById("result").textContent = currentValue;
});

document.getElementById("seven").addEventListener("click", function () {
  currentValue = currentValue * 10 + 7;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("eight").addEventListener("click", function () {
  currentValue = currentValue * 10 + 8;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("nine").addEventListener("click", function () {
  currentValue = currentValue * 10 + 9;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("zero").addEventListener("click", function () {
  currentValue = currentValue * 10 + 0;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("delete").addEventListener("click", function () {
  document.getElementById("result").textContent = "";

  // NASE POCETNE VREDNOSTI
  currentValue = 0;
  finalValue = undefined;
  op = "";
});

document.getElementById("equal").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  console.log("finalValue on EQUAL", finalValue);
  document.getElementById("result").textContent = finalValue;

  //
  console.log("==== Vracamo varijable na pocetne vrednosti ====");
  op = "";
  console.log("inital op", op);
  currentValue = 0;
  finalValue = undefined;
  console.log("inital finalValue", finalValue);
  console.log("initial currentValue", currentValue);
});

document.getElementById("plus").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "+";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("minus").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "-";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("times").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "*";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("divide").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "/";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});
