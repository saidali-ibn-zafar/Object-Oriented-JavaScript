# Class methods

- Methods defined within a class are functions associated with the class's prototype, allowing instances of the class to access and invoke these methods.

```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(this.email, "just logged in");
  }

  logout() {
    console.log(this.email, "just logged out");
  }
}

let userOne = new User("saidali@gmail.com", "Saidali");
let userTwo = new User("ali@gmail.com", "Ali");

userOne.login();
userTwo.logout();
```

- The User class is defined with a constructor that takes email and name parameters and sets them as properties of the instance.
- Two methods login() and logout() are defined inside the class to log messages indicating a user's login and logout actions respectively. These methods access the email property of the instance using this.email.
- Two instances of the User class (userOne and userTwo) are created with different email and name combinations.
- The login() method is called on userOne instance, logging a message indicating the login action with the email of the user.
- The logout() method is called on userTwo instance, logging a message indicating the logout action with the email of the user.
