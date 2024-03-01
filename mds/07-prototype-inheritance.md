# Prototype Inheritance

```js
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin(...args){
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('ali@gmail.com', 'Ali');
var userTwo = new User('saidali@gmail.com', 'Saidali');
var admin = new Admin('khan@gmail.com', 'Khan');

var users = [userOne, userTwo, admin];
```

I recommend you to watch [this](https://www.youtube.com/watch?v=Fsp42zUNJYU&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=11) because it is hard to explain here...

