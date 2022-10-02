/** 
 * protected members are only visible to subclasses of the class they’re declared in.
 */
class _Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends _Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}

const sg = new SpecialGreeter();
sg.greet();   // OK
sg.getName(); // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.