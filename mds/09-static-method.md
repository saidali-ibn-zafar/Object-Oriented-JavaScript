# Static method

A static method in JavaScript is a method that belongs to the class itself rather than to instances of the class.

```js
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  // Instance method
  instanceMethod() {
    console.log("This is an instance method");
  }

  // Static method
  static equals(a, b) {
    return a.width + a.height === b.width + b.height;
  }

  // Static method
  static isValidDimensions(width, height) {
    return width === height;
  }
}

// Calling instance method
const obj = new Square(4);
obj.instanceMethod(); // Output: This is an instance method

// Calling static method
console.log(Square.isValidDimensions(5, 6)); // false

```

`instanceMethod()` is an instance method. You need to create an instance of Square to call this method.

`staticMethod()` is a static method. You can call this method directly on the Square class itself, without creating an instance of the class.

```js
obj.isValidDimensions(7, 8) // ❌
```

No, calling `obj.isValidDimensions(7, 7)` will not work because isValidDimensions is a static method defined on the class Square. Static methods are associated with the class itself, not with instances of the class. Therefore, we can't call a static method on an instance of the class. We can only call static methods directly on the class itself, as shown in the example `Square.isValidDimensions(5, 6)`.
