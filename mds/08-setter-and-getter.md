# Setter and getter

Getter and setter methods in JavaScript provide a way to control access to object properties. They allow you to define custom behavior when getting and setting the values of properties.

And take a look at the code below: 

```js
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numberOfRequestsForArea = 0;
  }
  // getter
  get area() {
    this.numberOfRequestsForArea++;
    return this.width * this.height;
  }

  // setter
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);

console.log(square1.area); 
square1.area = 25; 
console.log(square1.area); 

console.log(square1.numberOfRequestsForArea);

```


- - - - - 
A getter method named area within a class.
```js
get area() {
    this.numberOfRequestsForArea++;
    return this.width * this.height;
  }
```
```js
// Accessing the getter method
console.log(rectangle.area);
```
- - - - -

A setter method named area within a class. 
```js
set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
}
```
```js
// Accessing the setter method
rectangle.area = 36; // This will set the area to 36

```

   

