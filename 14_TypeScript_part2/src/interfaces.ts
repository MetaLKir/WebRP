interface I1 {
    readonly id: number;
    name: string;
    isAdmin?: boolean;
}

const user1: I1 = {
    id: 1,
    name: "kir",
    isAdmin: true,
}
console.log(user1);

const user2: I1 = {
    id: 2,
    name: "Oleg",
}

// user1.id = 3; // can't change because of "readonly"
user1.name = "Denis";

interface Fun1 {
    (a: number, b: number): number;
}

const sum1: Fun1 = (a: number, b: number) => a + b;
console.log(sum1(6, 5));


interface StringArr {
    [x: number]: string; // array: index is number, value is string
}

const arr: StringArr = ["aaa", "bbb",];
const s1: StringArr = {1: "aaa"};
const s2: StringArr = {"1": "aaa"};
console.log(s1);
console.log(s2);

type Union = I1 & StringArr;

interface I2 {
    color: string,
}

interface I3 extends I1, I2, Union, StringArr {
    size: number;
}

interface I2 {
    size: number;
}

let inter: I2 = {
    color: "add",
    size: 100
}
console.log(inter);