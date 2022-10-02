class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 1;
pt.y = 2;
// pt.z = 3   // Property 'z' does not exist on type 'Point'.
// pt.x = "a" // Type 'string' is not assignable to type 'number'.


/** implements Clauses */
// You can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it:
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

// class Ball implements Pingable {
//   /**
//    *  Class 'Ball' incorrectly implements interface 'Pingable'.
//    * Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//    */
//   pong() {
//     console.log("pong!");
//   }
// }

/** extends Clauses */
// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  };
}

const d = new Dog();
d.move();
d.woof(3);


/**this */
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}

const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
console.log(obj.getName()); // Prints "obj", not "MyClass"