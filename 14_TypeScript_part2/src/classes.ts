class Us1 {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    } // build-in method "constructor"

    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

let us1: Us1 = new Us1("name1", 20);
console.log(us1);
us1.sayHello();

// class access modificators
// Java: public, private, default (by default), protected
// TypeScript: public (by default), private, protected, readonly (like public, but non-rewritable)

class Employee {
    public name: string;
    private _salary: number;
    private _department: string;
    readonly id: number;

    constructor(name: string, salary: number, department: string, id: number) {
        this.name = name;
        this._salary = salary;
        this._department = department;
        this.id = id;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }

    get department(): string {
        return this._department;
    }

    set department(value: string) {
        this._department = value;
    }

    toString(): string {
        return `${this.id} ${this.name} ${this.salary} ${this.department}`;
    }
}

let emp1 = new Employee("E1", 25_000, "dep1", 1);
console.log(emp1);

console.log(emp1.department);
emp1.salary = 40_000;
console.log(emp1.salary);
console.log(emp1.toString());

//=======================================================
class Animal {
    name?: string;

    constructor(name?: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;

    constructor(breed: string, name?: string) {
        super(name);
        this.breed = breed;
    }
}

let d1: Dog = new Dog("vizla", "Chakie");
console.log(d1);
let d2: Dog = new Dog("buldog");

//=========================================
abstract class Vehicle {
    abstract start(): void;

    stop(): void {
        console.log("Vehicle stopped");
    }
}

class Car extends Vehicle {
    start(): void {
        console.log("Car started");
    }
}

let car1: Car = new Car();
car1.start();
car1.stop();

//=======================================
// person
interface P1 {
    name: string;
    age: number;
    id?: number;

    greet():void;
}

// student
class St1 implements P1, Fu1 {
    name: string; // must write interface's fields
    age: number;
    // id: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        // this.id = id;
    }

    greet():void {
        console.log("Greet");
    }
}

type Fu = string;
type Fu1 = {name: string, age: number};