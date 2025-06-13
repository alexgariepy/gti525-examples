function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} fait du bruit.`);
};

function Dog(name) {
	Animal.call(this, name);

    this.bark = function () {
        console.log(`${this.name} aboie.`);
    }
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const animal = new Animal('Animal');
const chien = new Dog('Rex');

animal.speak();
chien.speak();
chien.bark();