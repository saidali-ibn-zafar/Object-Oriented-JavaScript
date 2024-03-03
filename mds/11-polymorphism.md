# What is `Polymorphism`?

- Polymorphism is derived from the Greek words "poly" (many) and "morph" (form),
- So, when we are extending a class, then of course we would have child and parent classes, right? Yes, and then it checks if they have the same methods it uses seperately, I mean when you use that method with child class it works as written inside the child class. And it is called Polymorphism.

- Take a look at the example below:

  ```js
  class Animal {
    constructor(name){
      this.name;
    }

    makeSound() {
      console.log("Generic Animal Sound!");
    }
  }

  class Dog extends Animal {
    constructor(name){
      super(name);
    }

    makeSound(){
      console.log("Woof! Woof!");
    }
  }

  const a1 = new Animal("Jeff");
  const a2 = new Dog("Alex");

  console.log(a1.makeSound()); // Generic Animal Sound
  console.log(a2.makeSound()); // Woof! Woof!
  ```

  if `Dog` instance does not have `makeSound` method then it works as its parent class...
