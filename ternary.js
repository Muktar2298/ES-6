// --example-1--//
// const money = 150;
// let food;
// if (money >= 120) {
//   food = "You can Affored biriyani";
// } else {
//   food = "Try some others food";
// }
// console.log(food);

const money = 140;
let food = money >= 120 ? "You can affored Biriyani" : "try some others food";
// console.log(food);

// 2.--//
const areYouDeveloper = true;
if (areYouDeveloper == true) {
  console.log("Welcome to our Developer Community!");
} else {
  console.log("Learn Web Development!");
}

let amIDevelopers = areYouDeveloper
  ? "Welcome to your Dev Community!"
  : "Learn About the Web Development!";
// console.log(amIDevelopers);

// --3 --//
const num = 0; //--we know 0 is falsy value --//
const isZeroFasly =
  num == false ? "Zero is a falsy value" : "Zero is not a Falsy Value";
// console.log(isZeroFasly);

// 4.   (Nester ternary --//)
// const isAge = 21;
// if (isAge <= 13) {
//   console.log("I'm a PSC Candidate");
// } else if (isAge <= 16) {
//   console.log("I'm a SCC Candidate");
// } else if (isAge <= 18) {
//   console.log("I'm a HSC Candidate");
// } else if (isAge == 21) {
//   console.log("I'm a University Candidate'");
// } else {
//   console.log("I'm Exploring New Things");
// }



const isAge = 21;
let myEducation =
  isAge <= 13
    ? "I'm a PSC Candidate"
    : isAge <= 16
    ? "I'm a SSC Candidate"
    : isAge <= 18
    ? "I'm a HSC Candidate"
    : isAge == 21
    ? "I'm a University Student"
    : "I'm Exploring New Things";

console.log(myEducation);
