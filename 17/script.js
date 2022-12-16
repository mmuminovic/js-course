var grades = [];

var mainSubjects = [
  "Matematika",
  "Srpski",
  "Engleski",
  "Fizika",
  "Hemija",
  "Biologija",
];

document.getElementById("addButton").addEventListener("click", function () {
  var gradeNum = +document.getElementById("num").value;
  var subject = document.getElementById("subjectName").value;
  var grade = {
    num: gradeNum,
    subject: subject,
  };
  grades.push(grade);

  document.getElementById("num").value = "";
  document.getElementById("subjectName").value = "";
});

document.getElementById("showGrades").addEventListener("click", function () {
  //   var mainSubjectNames = grades.map(function (item, index) {
  //     return item.subject;
  //   });
  // [{num: 5, subject: 'Matematika'}, {num: 4, subject: 'Fizika}]
  // ['Matematika', 'Fizika']
  var filteredGrades = grades.filter(function (item, index) {
    return mainSubjects.includes(item.subject);
  });
  var parent = document.getElementById("listOfGrades");
  parent.innerHTML = "";
  filteredGrades.forEach(function (item, index) {
    var child = document.createElement("li"); // <li></li>
    child.textContent = item.subject + " - " + item.num; // <li>Matematika - 5</li>
    parent.appendChild(child); // <ul><li>Matematika - 5</li></ul>
  });
});

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// {value: 1, index: 0}

var ucenici = [
  {
    ime: "Haris",
    vladanje: 4,
  },
  {
    ime: "Muhamed",
    vladanje: 5,
  },
  {
    ime: "Halil",
    vladanje: 3,
  },
];

var nakonSmanjenaOcena = ucenici.map(function (item, index) {
  if (item.ime === "Muhamed") {
    return { ime: item.ime, vladanje: item.vladanje - 1 };
  } else {
    return item;
  }
});

console.log(nakonSmanjenaOcena);
