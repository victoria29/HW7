function Doctor(name){
    this.name = name;
    this.eat = function(){};
    this.walk = function(){};
    this.drink = function(){}
};

Doctor.prototype.cure = function () {
    document.write(" I Treat")
};

function Dentist(name){
    this.name = name;
    this.cure = function () {
        document.write("My name is " + this.name + " and I treat teeth.<br>")
    }
};

function Surgeon(name){
    this.name = name;
    this.cure = function () {
       document.write("My name is " + this.name + " and I perform operation.<br>")
    };
};

Dentist.prototype = new Doctor();
Surgeon.prototype = new Doctor();

var doctorDen = new Dentist("Den");
var doctorSurg = new Surgeon("Surg");

doctorDen.cure();
doctorSurg.cure();
console.log(doctorDen, doctorSurg);


