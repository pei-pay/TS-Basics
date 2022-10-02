/**
 * Classes may have static members. 
 * These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:
 */
class _MyClass {
  static x = 0;
  static printX() {
    console.log(_MyClass.x);
  }
}
console.log(_MyClass.x);
_MyClass.printX();