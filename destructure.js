//--object Destructure --//
const person = {
  name: "Nishat Hasan Muktar",
  age: 21,
  occupation: "Web Developer",
  hobby: "Web Development",
  location: "Dhaka",
  gfName: "Single",
  telphone: "0161091999",
};
// console.log(person.name);
// console.log(person.age);
// console.log(person['occupation']);
const { name, occupation, hobby } = person;
// console.log(name, occupation, hobby);


// --Destructure a Nested Object --//
const student = {
  name: "name",
  age: 21,
  info: {
    address: "Dhaka",
    location: "Savar",
    phone: "01753091999",
  },
  hobby: "Web Development",
  occupation: "Web Developer",
};

const { address, location, phone } = student.info;
// console.log(address, location, phone);



// ---Array Destructure ---//
const array = ["nishat","rubel","sijan","muktar"];
// console.log(array[0]);
// console.log(array[1]);
const [first,...others] = array;
console.log(first);
console.log(others);




