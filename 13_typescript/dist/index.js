"use strict";
let isLoading = true;
// isLoading = 10;
console.log(isLoading);
let number = 42;
let number1 = 42;
/*
===== PRIMITIVES =====
string
number
boolean
bigint
symbol !!!
*/
//===== ARRAYS =====
let nums = [1, 2, 3, 4];
let strs = ["abc", "dfg"];
//===== TUPLE ===== // can contain elements of various types
let user = [true, "Denis", 35];
//===== OBJECT =====
let person = { name: "Denis", age: 30 };
//===== FUNCTION =====
function sum(a, b) {
    return a + b;
}
function print(message) {
    console.log(message);
}
//===============================================
//===== UNION TYPES =====
let variable = 42; // can set 2 types for a var
variable = "hello";
variable = 42;
//========================================================
//========================================================
//========================================================
const array1 = [1, 2, 3, 4, 5,];
const array2 = [1, 2, 3, 4, 5,];
array1.push(10);
array1.forEach(e => console.log(e));
