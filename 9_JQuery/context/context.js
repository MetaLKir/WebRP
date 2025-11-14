console.log(this === window);

const user = {
    name: "John",
    sayHi() {
        console.log("Hi, I'm " + this.name);
    }
}

user.sayHi();

function Person(name) {
    this.name = name;
}

const person = new Person("Vothan");
console.log(person.name);


//=======================================================

function greet(){
    console.log(this.title);
}


const book = {title: "1984"};

// === call apply bind ===

greet.call(book); // calls existed (same as apply)

const text = greet.bind(book); // creates new function
text();

//=======================================================
// arrow functions

const client = {
    name: "Jerry",
    show: () => console.log(this.name),
}
// catches window.name instead of "Jerry"
// arrow functions have no this. context

client.show();
console.log("Window name: " + window.name);

//=======================================================

const nameOfFunction = function() {
    return `${this.firstName} ${this.lastName}`;
}

const john = {
    firstName: "John",
    lastName: "Doe"
}

const peter = {
    firstName: "Peter",
    lastName: "Griffin"
}

john.fullname = nameOfFunction;
peter.fullname = nameOfFunction;

console.log(john.fullname());
console.log(peter.fullname());

console.log(nameOfFunction());

window.firstName = "Win";
window.lastName = "Doe";

console.log(nameOfFunction());