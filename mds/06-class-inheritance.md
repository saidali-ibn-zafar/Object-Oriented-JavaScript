# Class inheritance


```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in");
    return this;
  }

  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email !== user.email;
    });
  }
}

let userOne = new User("saidali@gmail.com", "Saidali");
let userTwo = new User("ali@gmail.com", "Ali");
let admin = new Admin("umar@gmail.com", "Umar");

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users); // [userOne, admin]

```

As you could see there was `class Admin extends User {...}` which means we have Admin class, it includes all the properties of User and its new properties, kind of copying...

watch it if you do not understand - [click](https://www.youtube.com/watch?v=_cgBvtYT3fQ&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=8)
