"use strict";
const tt = { name: "Name1", age: 100 };
// function type implementation
const sum = (x, y) => x + y;
console.log(sum(5, 12));
// can choose only from specified options
let userStatus = "active";
let userStatus1 = "banned";
let book = { title: "", };
// Pick<Type, fields we want to keep>
// Omit<Type, fields we don't want to keep>
