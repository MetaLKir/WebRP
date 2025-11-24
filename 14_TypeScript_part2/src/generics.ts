function f1<T>(value: T): T {
    return value;
}

let res1 = f1<number>(32);
console.log(res1);
let res2 = f1<string>("32");
console.log(res2);
let res3 = f1<boolean>(false);
console.log(res3);
let res4 = f1<boolean>(false);
// res4 = 10;

function f2<T, U>(o1: T, o2: U): T & U {
    return {...o1, ...o2};
}

let u1 = f2({name:"Pit"}, {status:true});
console.log(u1);

interface K1<K, V> {
    key: K;
    value: V;
}

let pair1: K1<string, number> = {
    key: "age",
    value: 30
}