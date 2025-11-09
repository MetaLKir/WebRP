const arr1 = [1, 2, 3, 7, 11, 15];
let a = arr1[0];
let b = arr1[1];
console.log(a);
console.log(b);

console.log("=".repeat(50));

// DESTRUCTURISATION

let [a1, b1] = arr1;
console.log(a1);
console.log(b1);

let [a2, b2, ...c] = arr1;
console.log(c);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
}

let {firstName, lastName, ...obj} = person;
console.log(firstName + " " + lastName);
console.log(obj);

console.log("=".repeat(50));

function printPerson(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

printPerson(person);

function printPerson1({firstName, lastName}) {
    console.log(`${firstName} ${lastName}`);
}

printPerson1(person);

console.log("=".repeat(50));

let {firstName: fName, lastName: lName, ...obj0} = person;
console.log(fName);
console.log(lName);

console.log("=".repeat(50));

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    function() {
        return `${this.firstName} ${this.lastName}`;
    },
    'my hobby': 'skating'
};

console.log(person2['my hobby']);

let {firstName: fName1, lastName: lName1, 'my hobby': hobby, ...obj1} = person2;

console.log(hobby);