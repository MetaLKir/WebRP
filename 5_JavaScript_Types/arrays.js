let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, "!"];
let arr2 = ["Hello", 2, true];

console.log(arr2);

let arr3 = [];
console.log(arr3.length);
arr3[1000000000] = 20;
console.log(arr3.length);

function sum(a, b) {
    return a + b;
}

console.log(typeof arr3[10]);
console.log(typeof arr3);
console.log(arr1.length);

let arr4 = new Array(10);
arr4.fill(0); // fill array with default values
console.log(arr4);

arr4[10] = 1;
console.log(arr4.length);

let arr44 = new Array(10);
arr44.fill(0, 3, 8);
console.log(arr44);

let arr5 = Array.of(1, 2, 3, 4, 5, 6,);
console.log(arr5);

let str = "Hello world";
let arr6 = Array.from(str);
console.log(arr6);

// how to change the length of an array
arr3.length = 5;
console.log(arr3.length);
console.log(arr3);

const arr7 = Array.from(str); // copy array
arr7[1000000000] = 20;
console.log(arr7.length);
arr7.length = 4;
console.log(arr7);
// arr7  = arr5;
arr3 = arr5;

let arr8 = Array.from(arr6);
// changing copy, not affecting original array
console.log(arr8);
arr8[1] = 6;
console.log(arr8);
console.log(arr6);
console.log(arr3);
// vars with the link to the same array
console.log(arr5);
arr3[2] = 1000;
console.log(arr3);
console.log(arr5);


//===== Iteration =====
console.log("===== Iteration ===============================");
for (let i = 0; i < arr5.length; i++) {
    console.log(i, " - ", arr5[i]);
}
console.log("-----------------------");
for (let key in arr5) {
    console.log(key, " - ", arr5[key]);
}
console.log("-----------------------");
// Array Map Set
for (let v of arr5) {
    console.log(v);
}
console.log("-----------------------");
for (let v of str) {
    console.log(v);
}

//===== Add elements =====
console.log("===== Add elements ===============================");
arr5.push(55, 89, 110); // add elements to the end
console.log(arr5);
console.log("-----------------------");
let arr9 = [80, 90];
arr5.unshift(...arr9); // ... is spread operator, which flatMap elements of array
// if not use spread, whole arr9 will be just one element of arr5
console.log(arr5);
console.log("-----------------------");
arr5.splice(5, 2, 2000, 2500, 3000);
// remove elements and insert new (if needed)
console.log(arr5);

//===== Remove elements =====
console.log("===== Remove elements ===============================");
console.log(arr5.pop()); // remove element from the end
console.log(arr5);
console.log("-----------------------");
console.log(arr5.shift()); // remove element from the start
console.log(arr5);
console.log("-----------------------");
arr5.splice(4, 1);
console.log(arr5);
console.log("-----------------------");
let arr10 = arr5.slice(1, 2);
console.log(arr10);
arr10[0] = 1005;
console.log(arr10);
console.log(arr5);

console.log("-----------------------");
let arr11 = arr5.concat(arr10, 1, 1, 1, arr7);
console.log(arr11);

//===== Search elements =====
console.log("===== Search elements ===============================");

arr11.forEach(i => console.log(i));
console.log("-----------------------");
console.log(arr11.indexOf(1, 4));
console.log(arr11.lastIndexOf(1, 4));
console.log(arr11.includes(1, 4));

console.log("-----------------------");
console.log(arr11.reverse());
console.log(arr.join("---"));

console.log("-----------------------");
let res = arr.find(function (item) {
    return item === 200;
});
console.log(res);


res = arr.findIndex(function (item) {
    return item === 2;
});
console.log(res);

console.log("-----------------------");
let res2 = arr11.filter(function (item) {
    return item % 2 === 0;
})
console.log(res2);

console.log("-----------------------");
res = arr.every(function (item) {
    return item > 0;
})
console.log(res);

console.log("-----------------------");
res = arr.some(function (item) {
    return item > 3;
})
console.log(res);

console.log("-----------------------");
res = arr2.every(function (item) {
    return typeof item === "number";
})
console.log(res);

//===== Sorting =====
console.log("===== Sorting ===============================");
let arr12 = [-101, 100, 200, -1, 21, 2, 3, 4, "avv", "ab", "aaa", "-10"];
console.log(arr12.sort((a, b) => a - b));
console.log(arr12.sort());
console.log("-----------------------");
arr12 = [-101, 100, 200, -1, 21, 2, 3, 4];
res = arr12.map(function (item) {
    return item * 2;
})
console.log(res);

let res3 = arr3.map(function (item) {
    return `<li>${item}</li>`;
})
console.log(res3);


//===== reduce =====
console.log("===== reduce ===============================");

let sum1 = arr.reduce(function (accumulator, item) {
    return accumulator + item;
}, 1000);
console.log(sum1);

let min = arr.reduce(function (accumulator, item) {
    if (item < accumulator)
        accumulator = item;
    return accumulator;
}, arr[arr.length - 1]);
console.log(min);

min = arr.reduce(function (accumulator, item) {
    if (accumulator > item)
        return item;
    else
        return min;
});
console.log(min);