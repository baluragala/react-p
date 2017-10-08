let name = 'bala';
let age = 32;

var person = {
  name: name,
  age: age,
  getSalary: function () {
    return 2000
  }
}

var person = {
  name,
  age,
  ['ID' + age]: age,
  get Age() {
    return this.age
  },
  set Age(value) {
    this.age = value
  },
  getSalary() {
    return 2000
  }
}

person.Age = 33

console.log(person)