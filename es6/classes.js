var Person = class  {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(this)
  }
}

var S = class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade
  }

  print() {
    console.log(this)
  }
}

let p = new S('abc', 23,'Mech');
p.print();

