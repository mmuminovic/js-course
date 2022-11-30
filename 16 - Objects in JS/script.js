var grades = [];

function getGrade() {
  var gradeNum = +document.getElementById("num").value;
  var gradeSubject = document.getElementById("subjectName").value;

  var grade = { num: gradeNum, subject: gradeSubject };

  document.getElementById("num").value = "";
  document.getElementById("subjectName").value = "";
  return grade;
}

function addGradeToArray(grade) {
  grades.push(grade);
}

function showTheArrayInConsole() {
  console.log(grades);
}

function renderAllGrades() {
  document.getElementById("listOfGrades").innerHTML = "";
  // ucitamo parent html (getElementById)
  var list = document.getElementById("listOfGrades");

  for (var i = 0; i <= grades.length - 1; i++) {
    // napravimo html element - list item (createElement)
    var listItem = document.createElement("li");
    // dodajemo u novonapravljeni element informacije o oceni (.textContent = ocena)
    listItem.textContent = grades[i].num + " - " + grades[i].subject;
    // appendujemo taj napravljeni html element u parent html elemet
    list.appendChild(listItem);
  }
}

document.getElementById("addButton").addEventListener("click", function () {
  // 1. Ucitaj unetu ocenu
  var ocena = getGrade();
  // 2. Unesite ocenu u niz
  addGradeToArray(ocena);
  // 3. Ispisite ocene u html dokument
  renderAllGrades();

  showTheArrayInConsole();
});

/* 

function multiplyValues(a,b){
  return a*b;
}

var calculatedValues = multiplyValues(a,b);

*/

// var user = {
//   name: 'Muhamed',
//   yearOfBirth: 1995,
//   graduated: true,
//   username: 'muhamed1234',
//   profilePhoto: 'www.cojsadoikawod.com',
// };

// console.log(user.name);

// var arr = [1, 2, 3];
