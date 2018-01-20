function Animal() {
    this.name = 'tobi';
}
Animal.prototype.getName = function () {
    return this.name;
};
Animal.prototype.eat = function (food) {
    console.log(food);
};
var animal = new Animal();
console.log(animal.getName());
function Ferret() {}
Ferret.prototype = new Animal();
Ferret.prototype.type = 'domestic';
Ferret.prototype.eat = function (food) {
    Animal.prototype.eat.call(this, food);
    console.log('花Q,花Q花Q')
};
var ferret = new Ferret();
ferret.eat('meat');

function x() {}
x.prototype.eat = function (food) {
    console.log(food);
};
function y() {}
y.prototype._proto_ = x;  ////_proto_继承,不需要再y.prototype = new x();
y.prototype.eat = function (food) {
    x.prototype.eat.call(this, food);
    console.log('花Q');
};
var yy = new y();
yy.eat('meat');