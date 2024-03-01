# Class constructors and new keyword

```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User("saidali@gmail.com", "Saidali");
let userTwo = new User("ali@gmail.com", "Ali");

```

## `new` keyword
- creates a new empty object {}
- sets the value of `this` to be the new empty object
- calls the constructor method
