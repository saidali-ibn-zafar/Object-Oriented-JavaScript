# extends 

- In JavaScript, the `extends` keyword is used to create a subclass (a class that inherits from another class). This allows you to create a class hierarchy where one class (the subclass) inherits properties and methods from another class (the superclass). The subclass can then extend or override the behavior of the superclass as needed.

```js
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    // Custom behaviour
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding...`);
  }
}

let person1 = new Person("Ali", 20);
let programmer1 = new Programmer("Saidali", 21, 2);

console.log(person1);
console.log(programmer1);

const programmers = [
  new Programmer("Umar", 45, 7),
  new Programmer("Khalid", 34, 4),
];

function developSoftware(arr) {
  for (let programmer of arr) {
    programmer.code();
  }
}

developSoftware(programmers);

```
