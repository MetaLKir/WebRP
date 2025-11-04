function sum(x, y) {
    return x + y;
}

let add = sum;
console.log(add);
console.log(add(2, 3));
console.log(typeof add);
console.log("====================================");


console.log(typeof add + '!');
console.log(add + '!');
console.log("====================================");

let sub = function (a, b) {
    return a - b;
}
console.log(sub(2, 3));
console.log(typeof sub);
console.log(sub);


function choice(f1, f2, x, y) {
    console.log(arguments); // array of arguments passed to function
    console.log("Argument 2 is: " + arguments[2])
    if (y)
        return f1(x, y);
    else return f2(x);
}

function power2(x) {
    return x ** 2;
}

console.log(choice(sum, power2, 10, 2));
console.log(choice(sum, power2, 10));
console.log(choice(sum, power2, 10, 4, 10, 5, "ffff", true));

// auto-call function. previous line (code) must be closed with ;
(function name(name) {
    console.log(name);
})('JS');

console.log(power2(4));

console.log("====================================");
// //===== alert confirm =====
// let conf = confirm("Are you sure?"); // true / false
// if(!conf){
//     alert("go home"); // just notification
// } else {
//     let name = prompt(); // return string
//     alert("Hello " + name);
// }

// invite
// takes nothing, asks name
// if no name, type 'cancel' and finish the work
// if name entered, ask also age and check if age is number
// depending on age, invite to the table (>=18) or send to kindergarten (<18)

Number.isFinite(10.); // checks is number
Number.isInteger(10.5); // checks is integer

function invite() {
    let name = prompt("Enter your name: ");
    let age;
    if (!name)
        alert("Cancel");
    else{
        age = Number(prompt("Enter your age: "));
        if (Number.isFinite(age)) {
            if (age >= 18){
                alert("Welcome to the table");
            }
            else alert("Go to kindergarten");
        } else alert("Invalid age");
    }
}

invite();

//===== Date =====
let date1 = new Date();
console.log(date1);

date1 = new Date(0); // pass milisec
console.log(date1);

date1 = new Date(2020, 11, 2);
console.log(date1);

date1 = new Date("2025-11-02");
console.log(date1);

console.log(`${date1.getDate()}`);
console.log(`${date1.getDay()}`);
console.log(`${date1.getHours()}:${date1.getMinutes()}`);

console.log(date1.toString());
console.log(date1.toLocaleString());
console.log(date1.toTimeString());

console.log(date1.toLocaleString('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: "hebrew"
}));

console.log(date1.toLocaleString('heb', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: "hebrew"
}));

console.log(date1.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    calendar: "chinese"
}));
