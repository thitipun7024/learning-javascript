/* var mss: string = "Hello wold";
console.log(mss) */
var Human = /** @class */ (function () {
    function Human() {
        this.name = "";
        this.lname = "";
        this.age = 0;
    }
    Human.prototype.sayhello = function () {
        return "hello ! I'm" + this.name + " " + this.lname + "and" + this.age + "year old";
    };
    return Human;
}());
var user1 = new Human();
user1.name = 'thitipun';
user1.lname = 'pecharut';
user1.age = 19;
console.log(user1.sayhello());
