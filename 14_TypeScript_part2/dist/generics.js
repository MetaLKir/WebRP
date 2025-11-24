"use strict";
function f1(value) {
    return value;
}
let res1 = f1(32);
console.log(res1);
let res2 = f1("32");
console.log(res2);
let res3 = f1(false);
console.log(res3);
let res4 = f1(false);
// res4 = 10;
function f2(o1, o2) {
    return Object.assign(Object.assign({}, o1), o2);
}
let u1 = f2({ name: "Pit" }, { status: true });
console.log(u1);
let pair1 = {
    key: "age",
    value: 30
};
