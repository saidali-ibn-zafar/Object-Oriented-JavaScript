class Point {
  constructor(x = 0.0, y = 0.0) {
    this.x = x;
    this.y = y;
  }

  // getter methods
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  // setter methods
  setX(_x) {
    this.x = _x;
  }
  setY(_y) {
    this.y = _y;
  }

  // distance method - it calculates the distance between the two coordinates in euclidean formula sqrt((x1 - x2) + (y1 - y2);
  distance(otherPoint) {
    const dx = this.x - otherPoint.getX();
    const dy = this.y - otherPoint.getY();
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}

class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  length() {
    return this.point1.distance(this.point2);
  }
}

// distance function - it does the same things as distance method does
function distance(point1, point2) {
  const dx = point1.getX() - point2.getX();
  const dy = point1.getY() - point2.getY();
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

// a function dist which takes an array of Points. The function has to return sum of the distances between each consecutive pairs of points
function dist(arr) {
  const _arr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    _arr.push(arr[i].distance(arr[i + 1]));
  }
  const sum = _arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum;
}

const p1 = new Point(1, 2);
const p2 = new Point(4, 6);

// console.log(distance(p1, p2));
// console.log(p1.distance(p2));

const pointsArray = [
  new Point(1, 2),
  new Point(4, 6),
  new Point(7, 8),
  new Point(10, 12),
];

// console.log(dist(pointsArray));

const l1 = new Line(p1, p2);

// console.log(l1.length());

// - - - - - -

class Person {
  constructor(name, surname, age = new Age()) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getAge() {
    return this.age.getAge();
  }

  setAge(_age) {
    this.age.setAge(_age);
  }

  celebrateBirthday() {
    this.age.birthday();
  }
}

class Age {
  constructor() {
    this.age = 0;
  }

  getAge() {
    return this.age;
  }

  setAge(_age) {
    if (age >= 0 && age <= 150) {
      this.age = _age;
    }
  }

  birthday() {
    if (this.age < 150) {
      this.age++;
    }
  }
}

const ali = new Person("Ali", "Zikirillaev");
console.log(ali.getAge()); // Output: 0
john.celebrateBirthday();
console.log(ali.getAge()); // Output: 1
