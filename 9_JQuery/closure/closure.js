// let myName = "Masha";

function greeting() {
    // let myName = "Zhenya";
    return function () {
        // let myName = "Hello World";
        console.log(`Hello ${myName}`);
    }
}

// myName = "Pit";
window.myName = "SOS";

const hello = greeting();
hello();


console.log("=".repeat(50));
//===== second example of closure =====

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const count1 = makeCounter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

console.log("=".repeat(50));

const count2 = makeCounter();
console.log(count2());