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