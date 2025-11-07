const json = '{"name": "name1", "age": 25}';
const obj = {"name": "name1", "age": 25};

console.log(json);
console.log(typeof json);
console.log(obj);
console.log(typeof obj);

const json2 = JSON.stringify(obj);
console.log(json2);
console.log(typeof json2);

const obj2 = JSON.parse(json);
console.log(obj2);
console.log(typeof obj2);
console.log(obj2.name);

//=======================================
console.log("=".repeat(50));

let point = {
    x: 10,
    y: 20,
    "my hobby": "games",
    "1field": true,
    // toString: function () {
    //     return JSON.stringify(this);
    // },
    num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

console.log(point["my hobby"]);
console.log(point.x);
console.log(point[`x`]);
console.log(point.z);

//=======================================
console.log("=".repeat(50));

console.log(point);
console.log("point: " + point); // need toString() in point,
// otherwise will call from parent Object (so will show incorrectly)
console.log("point: ", point);

//===== Change and add fields ==================================
console.log("=".repeat(50));

point["x"] = 100;
console.log(point);

point["z"] = 5;
console.log(point);

function increment(number) {
    number++;
}

function incrementPoint(number) {
    number.x++;
    number.y--;
}

let number = 10;
increment(number);
console.log(number);

incrementPoint(point);
console.log(point);

console.log("=".repeat(50));

// get field values of object
console.log(Object.values(point));
// get field names of object
console.log(Object.keys(point));
// get both
console.log(Object.entries(point));

let entries = Object.entries(point);

for (let entry of entries) {
    console.log(entry);
}

for (let entry of entries) {
    console.log(entry[0], '->', entry[1]);
}

//===== Copy objects ==================================
console.log("=".repeat(50));

let point1 = point; // не копирование, присваивание ссылки

let point2 = {...point}; // поверхностная копия объекта
// для примитивов сделает копию, для ссылочных скопирует ссылку!
// т.е. поля с числами у каждого будут свои, а поле с массивом будет общее

let point3 = structuredClone(point1); // deals deep copy
// but cant copy functions (no options to copy with them)
console.log(point3);
point3.num[1] = 1000;

let point4 = {...point, company: "BM"};
console.log(point4);

let point5 = {...structuredClone(point4), company: "BM"};

//=======================================
console.log("=".repeat(50));

let p1 = {x: 10, y: 100};
let p2 = {x: 10, y: 100};
console.log(p1.x == p2.x);
console.log(p1.x === p2.x);
console.log(p1 === p2);
// how to compare objects
console.log(JSON.stringify(p1) === JSON.stringify(p2));

function Person(name){
    this.name = name;
} // class constructor (yeah, not function)
// MUST BE WRITTEN FROM CAPITAL LETTER

//===== Creating parent on fly==================================
console.log("=".repeat(50));

const pr = new Person("John");
console.log(typeof pr);
Person.prototype.age = 30;
console.log(pr);
console.log(pr.age);
console.log(JSON.stringify(pr));
console.log(JSON.stringify(pr.prototype));

const person = new Person("John1");
console.log(person.age);

const walk={
    w(){
        console.log(`${this.name} is walking`);
    }
}
Object.assign(Person.prototype, walk);
const pp = new Person("Mike");
pp.w();

function Parent(){
    this.name = "parent";
}

function Child(){
    this.name = "child";
}

//===== Creating parent on fly ==================================
console.log("=".repeat(50));

Child.prototype = new Parent(); // 1st way to set parent
const c = new Child();
console.log(c.type);
const ppp = new Parent();
Object.setPrototypeOf(ppp, c); // swap parent and child; 2nd way to set parent
console.log(ppp.name);

// c.__proto__ = ppp; // 3rd way to set parent
