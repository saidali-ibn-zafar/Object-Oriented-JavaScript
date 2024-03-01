# Method chaining

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

let userOne = new User("saidali@gmail.com", "Saidali");
let userTwo = new User("ali@gmail.com", "Ali");

userOne.login().updateScore().updateScore().logout();

```

- `return this` means it returns that object itself,
- why we need it, because we are writing `userOne.login().updateScore().updateScore().logout()`, this is called method chaining,

### If you still do not understand, it is for you -> [link](https://www.youtube.com/watch?v=8x1fygdWabY&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=7)
