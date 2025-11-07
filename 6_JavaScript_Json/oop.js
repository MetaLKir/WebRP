function Point(x, y) {
    this.x = x;
    this.y = y;
}

let point = new Point(10, 20);
console.log(point);

function Point1(a, b){
    x = a;
    y = b;
} // without `this.` it not works properly

let p1 = new Point1(10, 20);
console.log(p1);

let p2 = Point1(20, 20); // without `new`; undefined
console.log(p2);

//============================================
console.log("=".repeat(50));

function end(){
    console.log("point");
}
end();
console.log(end());

//============================================
console.log("=".repeat(50));

const human = {
    hobby: "reading"
}

const john = {
    firstName: "John",
    lastName: "Doe"
}

console.log(john.firstName);
console.log(john.lastName);
console.log(john.hobby);

// john.__proto__ = human;
// console.log(john.hobby);
Object.setPrototypeOf(john, human);
// console.log(john.hobby);

//============================================
console.log("=".repeat(50));

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype = human;
console.log(john.hobby);

const peter = new Person("Peter", "Pen", 20);
console.log(peter.hobby);

Person.prototype.toString = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

console.log(peter.toString());
console.log(john.toString());

console.log(peter.hasOwnProperty('hobby'));
console.log(peter.hasOwnProperty('firstName'));

Person.isAdult = function (person) {
    return person.age > 18;
}

console.log(Person.isAdult(peter));