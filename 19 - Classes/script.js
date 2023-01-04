// Uvodni deo
var user = {
  name: "Muhamed Muminovic",
  age: 27,
  country: "Serbia",
  isGraduated: true,
  company: {
    name: "Paycor",
    country: "USA",
    office: {
      address: "Belgrade",
    },
  },
};

// console.log(user.company.office.address);

// console.log(user.name); // vrednost property-a "name" objekta "user"

// 2.
// var user = {
//   name: "Muhamed",
//   yearOfBirth: 1995,
//   calculateAge: function () {
//     var date = new Date();
//     var currentYear = date.getFullYear();
//     return currentYear - this.yearOfBirth;
//   },
//   printUserName: function () {
//     console.log(this.name);
//   },
// };

// var text = "Hello world!";
// text.toUpperCase();

// user.printUserName();

// user.printUserName();

// function calculateAge(yearOfBirth) {
//   var date = new Date();
//   var currentYear = date.getFullYear();
//   return currentYear - yearOfBirth;
// }

// console.log(calculateAge(user.yearOfBirth));

// 3.
// var student1 = {
//   name: "Muhamed",
//   yearOfBirth: 1995,
//   studying: "Mathematics",
//   calculateAge: function () {
//     var date = new Date();
//     var currentYear = date.getFullYear();
//     return currentYear - this.yearOfBirth;
//   },
//   printUserName: function () {
//     console.log(this.name);
//   },
// };

// var student2 = {
//   name: "Haris",
//   yearOfBirth: 1999,
//   studying: "Software Engineering",
//   calculateAge: function () {
//     var date = new Date();
//     var currentYear = date.getFullYear();
//     return currentYear - this.yearOfBirth;
//   },
//   printUserName: function () {
//     console.log(this.name);
//   },
// };

// console.log(user.name);
// console.log(user.yearOfBirth);
// console.log(user.calculateAge());

// var result = user.calculateAge();
// user.printUserName();

class Student {
  status = "student";
  constructor(name, yearOfBirth, studying, isGraduated) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.studying = studying;
    this.isGraduated = isGraduated;
  }
  calculateAge() {
    var date = new Date();
    var currentYear = date.getFullYear();
    return currentYear - this.yearOfBirth;
  }
  printUserName() {
    console.log(this.name);
  }
}
var student1 = new Student("Muhamed", 1995, "Mathematics", true); // {}
// {name: "Muhamed", yearOfBirth: 1995, studying: "Mathematics", isGraduated: true, status: "student"}
student1.printUserName();

// umesto da kreiramo objekat kao sto smo uradili za student1 i student2
// kreiracemo ih pomocu klase


var student2 = new Student("Haris", 1999, "Software Engineering", false);
student2.printUserName();
