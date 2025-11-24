"use strict";
const user1 = {
    id: 1,
    name: "kir",
    isAdmin: true,
};
console.log(user1);
const user2 = {
    id: 2,
    name: "Oleg",
};
// user1.id = 3; // can't change because of "readonly"
user1.name = "Denis";
const sum1 = (a, b) => a + b;
console.log(sum1(6, 5));
const arr = ["aaa", "bbb",];
const s1 = { 1: "aaa" };
const s2 = { "1": "aaa" };
console.log(s1);
console.log(s2);
let inter = {
    color: "add",
    size: 100
};
console.log(inter);
