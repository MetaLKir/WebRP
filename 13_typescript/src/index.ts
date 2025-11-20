let isLoading: boolean = true;
// isLoading = 10;

console.log(isLoading);

let number = 42;
let number1: number = 42;

/*
===== PRIMITIVES =====
string
number
boolean
bigint
symbol !!!

//===== ARRAYS =====
let nums: number[] = [1, 2, 3, 4]
let strs: Array<string> = ["abc", "dfg"]

//===== TUPLE ===== // can contain elements of various types
let user: [boolean, string, number] = [true, "Denis", 35]

//===== OBJECT =====
let person: {
    name: string,
    age: number
} = {name: "Denis", age: 30}

//===== FUNCTION =====
function sum(a: number, b: number): number {
    return a + b;
}

function print(message: string): void {
    console.log(message);
}

//===============================================
//===== UNION TYPES =====
let variable: number | string = 42; // can set 2 types for a var
variable = "hello";
variable = 42;
// variable = false;

//===== &&& types =====
type A = { a: number };
type B = { b: string };
type AB = A & B;

type User = {
    email: string;
    password: string;
    age: number;
}
*/
//=====array===================================================

const array1: number[] = [1, 2, 3, 4, 5,];
const array2: Array<number> = [1, 2, 3, 4, 5,];

array1.push(10);
array1.forEach(e => console.log(e));

//=====tuple==================================================
console.log("=".repeat(50));

let person: [number, string, boolean] = [1, "Denis", true];
console.log(person);
console.log(person[1]);
person[0] = 10;
person.push("hello");
console.log(person);
person.push(false);
console.log(person);

//=====any_type==================================================
console.log("=".repeat(50));

let zip: any = 100500;
zip = "zippo";
console.log(zip);

//=====function==================================================
console.log("=".repeat(50));

function say_hello(name: string): void {
    console.log(`Hello ${name}`);
}

say_hello("Masha");

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(10, 5));
console.log(sum);

//=====types==================================================
console.log("=".repeat(50));

type Login = string;
const nickname: Login = "admin";

type Id = string | number;
let id1: Id = 1234;
let id2: Id = "1234";

type User = {
    name: string,
    email: string,
    password?: string, // optional field, by question mark in the end of the field name
    birthday?: Date
    [key: string]: string | number | Date | undefined // field template
}

const oleg: User = {
    name: "Oleg",
    email: "oleg@gmail.com",
    password: "only0leg",
    birthday: new Date(),
}

const vika: User = {
    name: "Vika",
    email: "vika@gmail.com",
}

//=====types_combining==================================================
console.log("=".repeat(50));

type Area = {
    width: number,
    depth: number,
    area: () => number
};

type Height ={
    height: number,
};

type Total = Height & Area;

let t: Total = {
    width: 10,
    depth: 10,
    height: 10,
    area: function () {
        return this.width * this.depth;
    }
}
console.log(t.area());

//=====classwork==================================================
console.log("=".repeat(50));

type Citizen = {
    name: string,
    surname: string,
    id: number
}

type Address = {
    city: string,
    street: string,
    houseNumber: number
}

type CitizenAddress = Citizen & Address;

let kir: CitizenAddress = {
    name: "Kir",
    surname: "Ill",
    id: 100,
    city: "Karmiel",
    street: "Nesiei Israel",
    houseNumber: 3
}

type CitizenAddressNew = Pick<Citizen, 'name' | 'surname'> & Address;
// take only 'name' and 'surname' from Citizen

let o1:CitizenAddressNew = {
    name: "Name1",
    surname: "Surname1",
    city: "City1",
    street: "Street1",
    houseNumber: 1
}

type CitizenAddressOmit = Omit<Citizen, 'name' | 'surname'> & Address;
// take all except 'name' and 'surname' from Citizen

let o2:CitizenAddressOmit = {
    id: 2222,
    city: "City2",
    street: "Street2",
    houseNumber: 2
}