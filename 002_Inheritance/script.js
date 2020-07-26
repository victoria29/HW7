function Man(name) {
    this.name = name;
    this.eat = function(){};
    this.walk = function(){};
    this.drink = function(){}
};

function Soldier(name) {
    this.name = name;
    this.shoot = function () {}
};

function Doctor(name) {
    this.name = name;
    this.cure = function () {}
};

Soldier.prototype = new Man();
Doctor.prototype = new Man();

var soldier = new Soldier("YYY");
var doctor = new Doctor("ZZZ");

soldier.shoot();
doctor.cure();

console.log(soldier);
console.log(doctor);