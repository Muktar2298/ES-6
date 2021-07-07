class Parent {
  constructor() {
    this.fatherName = "Md.Shada Mia";
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.childName = name;
  }
}

const inheritance = new Child("Nishat Hasan Muktar");
console.log(inheritance);
