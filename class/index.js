var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pt = new Point();
pt.x = 1;
pt.y = 2;
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log('ping!');
    };
    return Sonar;
}());
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving along!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log('woof!');
        }
    };
    ;
    return Dog;
}(Animal));
var d = new Dog();
d.move();
d.woof(3);
/**this */
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "MyClass";
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var c = new MyClass();
var obj = {
    name: "obj",
    getName: c.getName
};
console.log(obj.getName());
