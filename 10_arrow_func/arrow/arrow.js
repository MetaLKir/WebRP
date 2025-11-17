function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

//================================

let sum1 = function (a, b) {
    return a + b;
}

console.log(sum1(10, 20));

//=================================

let sum2 = (a, b) => {
    return a + b;
};

console.log(sum2(10, 20));

//=================================

let sum3 = (a, b) => a + b;

console.log(sum3(10, 20));

//=================================

let sqr = a => a * a;

console.log(sqr(12));

//=================================

// objects' body must be in round brackets
let getObject = name => ({
    name: name,
    age: 120
})

console.log(getObject('Zhenya'));

//=================================

let arr = [1, 2, 3, 4, 5, 9, 10, 15];
console.log(arr);
console.log(arr.filter(v => v % 2 === 0));
console.log(arr.filter(function (v) {
    return v % 2 === 0;
}));
// arr.forEach(v => console.log(v));

//===============================================================
//===============================================================

// function clickHandler(){
//     console.log(this);
// }
// clickHandler();
//
let btn = document.querySelector('button');
// btn.onclick = clickHandler;

let clickArrowHandler = () => {
    console.log(this);
}
clickArrowHandler();

btn.onclick = clickArrowHandler;

//=================================

// let a = {
//     name: 'John',
//     displayName: function () {
//         console.log(this.name);
//     }
// }
//
// a.displayName();
//
// let b = {
//     name: 'Jack',
// }
//
// b.display = a.displayName;
// b.display();

//=================================
window.name = "SOS"

let a = {
    name: 'John',
    displayName: () => console.log(this.name)
}

a.displayName();

let b = {
    name: 'Jack',
}

b.display = a.displayName;
b.display();