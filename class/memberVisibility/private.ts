/** 
 * private is like protected, but doesn’t allow access to the member even from subclasses:
 */
class Base {
  private x = 0;
}
const b = new Base();
console.log(b.x);  // Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base {
  showX() {
    console.log(this.x); // Property 'x' is private and only accessible within class 'Base'.
  }
  x = 1;  // Class 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'.;
}