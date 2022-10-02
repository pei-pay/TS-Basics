/** 
 * The default visibility of class members is public. A public member can be accessed anywhere
 */
class Greeter {
  public greet() {
    console.log('hi!');
  }
}

const g = new Greeter();
g.greet();
