type Name = string;
type Age = number;

type T1 = {
    name: Name;
    age: Age;
}

const tt: T1 = {name: "Name1", age: 100};

// function type
type T2 = (a: number, b: number) => number;
// function type implementation
const sum: T2 = (x, y) => x + y;
console.log(sum(5, 12));

type Status = "active" | "inactive" | "banned";
// can choose only from specified options
let userStatus: Status = "active";
let userStatus1: Status = "banned";

type Book = {
    title: string;
    author?: string;
}

let book: Book = {title: "",};

type T3 = {
    id: string;
}

type T1T3 = T1 & T3 & {company: string};
// Pick<Type, fields we want to keep>
// Omit<Type, fields we don't want to keep>