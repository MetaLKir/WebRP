"use strict";
class Us1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // build-in method "constructor"
    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}
let us1 = new Us1("name1", 20);
console.log(us1);
us1.sayHello();
// class access modificators
// Java: public, private, default (by default), protected
// TypeScript: public (by default), private, protected, readonly (like public, but non-rewritable)
class Employee {
    constructor(name, salary, department, id) {
        this.name = name;
        this._salary = salary;
        this._department = department;
        this.id = id;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
    get department() {
        return this._department;
    }
    set department(value) {
        this._department = value;
    }
    toString() {
        return `${this.id} ${this.name} ${this.salary} ${this.department}`;
    }
}
let emp1 = new Employee("E1", 25000, "dep1", 1);
console.log(emp1);
console.log(emp1.department);
emp1.salary = 40000;
console.log(emp1.salary);
console.log(emp1.toString());
//=======================================================
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }
}
let d1 = new Dog("vizla", "Chakie");
console.log(d1);
let d2 = new Dog("buldog");
//=========================================
class Vehicle {
    stop() {
        console.log("Vehicle stopped");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car started");
    }
}
let car1 = new Car();
car1.start();
car1.stop();
// student
class St1 {
    // id: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.id = id;
    }
    greet() {
        console.log("Greet");
    }
}
