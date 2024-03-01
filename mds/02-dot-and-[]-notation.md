# Dot and [ ] bracket notation.

- When we are working eith objects we use dot notation to get a access to properties in an object:

  ```js
  let userOne = {
  email: "saidali@ninjas.com",
  name: "Saidali",
  login() {
    console.log(this.email, "has logged in");
  },

  logout() {
    console.log(this.email, "has logged out");
  },
  };

  userOne.name = "Ali";

  ```

  `userOne.name` - here we are using dot notation,

  Moreover, there is also another way as dot notation does, it is square bracket notation!

  ```js
  userOne["name"] = "Saidali"
  ```

  ### ⚠️Attention!⚠️

  Inside the brackets we need to write as a string!!! not ❌`userOne[name]`❌

  - - - - -

  🤓 Dynamically we could also use variable inside the brackets:

  ```js
  let prop = "name";

  userOne[prop] = "Ali"; // ✔️
  ```
  
