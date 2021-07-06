// --Normal Way to Concate a multiple string ---//
let firstName = "Nihat";
let middleName = "Hasan";
let lastName = "Muktr";
let fullName =
  firstName + " " + middleName + " " + lastName + " Love Nusrat Jahan Tanha!";
// console.log(fullName);

let multilineStrin =
  "Hi!My name is Nishat Hasan Muktar\n" +
  "I'm a Front-End Web Developer!!\n" +
  "I want to become a Full-Stack Web Developer\n";
// console.log(multilineStrin);

// ---In ES-6,,We can use "Template String" ---//
let fullName2 = `${firstName} ${middleName} ${lastName} is a Passoniate Web Developer!!`;
// console.log(fullName2);

let multiline2 = `Hi! 
I'm a Front-End Web Developer
I want to become a Full-Stack Web Developer!! `;
// console.log(multiline2);

let calculation = `Add: ${10 + 10} 
Sub: ${30 - 10} 
Mul: ${10 * 10}
Div: ${100 / 10}`;
console.log(calculation);
