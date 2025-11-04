// alert("Hello World from file!");
console.log("Hello World");
console.log("Hello World");
let a = `Guests:
- Sveta
- Pit
- Masha`
console.log(a);
let b = 'Hello World';
let c = 'JavaScript';
console.log(b + ' today I learn ' + c);
console.log(`${b} Today I'm learning ${c}`);

/* variable species (don't mismatch with types):
1. let - like a regular variable
2. var - could be redeclared and has global visibility
3. const
*/
var v1;
v1 = 10;
console.log(v1);
var v2 = 20;
console.log(v2);
let l1;
l1 = 15;
console.log(l1);
// console.log(v3);
v3 = 10;
const c1 = 20;
l1 = "Hello World";
console.log(l1);
var v1 = "JavaScript";
console.log(v1);

// let l1 = 10;
// console.log(l1);

if (true)
    var v4 = 10;
console.log("v4 = " + v4);
if (true) {
    let l3 = 100;
    console.log("l3 = " + l3);
}

//====== variable types ======

// numbers - int, float etc; NaN (not a number); infinity, -infinity;
console.log(typeof 10);
console.log(typeof 10.5);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof (1 / 0));
console.log(typeof -Infinity);
console.log(typeof (-1 / 0));
//======================================================

console.log(typeof null);

//===== Casting =====
console.log(typeof ('1' + 1));
console.log('1' + 1);
console.log(typeof (1 + '1'));
console.log(1 + '1');

console.log(typeof (1 - '1'));
console.log(1 - '1');

console.log(typeof (1 - 'a'));
console.log(1 - 'a');

let num = 10;
console.log(num);
console.log(num + "");
console.log(typeof (num + ""));

num = true;
console.log(typeof num);
console.log(num + "");
console.log(typeof (num + ""));
console.log(num + 1);
num = false;
console.log(typeof (num + 1 + '1'));
console.log(num + 1 + '1');

num = '123';
console.log(typeof +num); // way to transfer a string to a num
console.log(!!0); // way to transfer a string to a boolean
// false: 0, -0, "", NaN, null, undefined, 0n
console.log(!!0);
console.log(!!(-0));
console.log(!!'');
console.log(!!(NaN));
console.log(!!null);
console.log(!!undefined);
console.log(!!0n);

// ===== explicit coercion (Casting) ======
console.log(typeof String(123));
console.log(typeof String(true));
console.log(typeof Number('123'));
console.log(typeof Number(true));
console.log(typeof Boolean(-123.9));
console.log(typeof Boolean('-123.9'));
console.log(typeof Boolean(null));

console.log(Number("true"));

//===== arithmetic operators =====
// +
// -
// *
// /
// %
// **   (power)

//===== logical operators ======
// ==
// if
// else
// else if
num = 6;
if (num === 5) {
    console.log('NaN');
} else if (num === 6)
    console.log('not');
else
    console.log('aaaaaaaa');

// equals
// ==   compare values, cast to same type (probably to number)
// ===  compare values and their types
// !=
// !==
console.log('2' == 2);
console.log('2' === 2);
console.log('2' == false);
// comparing undefined, null and NaN is not allowed
// only with themselves!

console.log(null == undefined);

// &&
// ||
console.log(1 || true || false);
console.log(0 && true && false);

//===== functions =====
console.log("===============================");
greeting();

function greeting() {
    console.log('Greeting function is working');
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('Kir');

function get_number() {
    return 42;
}

let res = get_number();
console.log(res);

function some(number) {
    console.log(number);
}

some();

function uppercase(str) {
    if (!str)
        str = "no string";
    return str.toUpperCase();
}
console.log(uppercase());

function uppercase1(str) {
    let res = str || "no string";
    return res.toUpperCase();
}
console.log(uppercase1());

function uppercase2(str = "no string") {
    return str.toUpperCase();
}
console.log(uppercase2());
console.log(uppercase2('kir'));
//=============================

function say(name) {
    let res = name || 'no name';
    console.log(`Hello ${res}`);
}
say();
say("Kir");

// ?? => default value only when null or undefined
function say1(name) {
    let res = name ?? 'no name';
    console.log(`Hello ${res}`);
}
say1();
say1("Kir");
say1(false);
say1(0);
say1(null);

