// value
// writable
// enumerable
// configurable - is able to delete?

const person = {name: "name1"};
console.log(Object.getOwnPropertyDescriptor(person, "name").value);
console.log(Object.getOwnPropertyDescriptor(person, "name").writable);
console.log(Object.getOwnPropertyDescriptor(person, "name").enumerable);
console.log(Object.getOwnPropertyDescriptor(person, "name").configurable);

console.log("=".repeat(50));
// ===== add property =====
// Object.defineProperty(person, "age", {value: 30});
Object.defineProperty(person, "age", {value: 30, writable: true, configurable: false, enumerable: true});
console.log(person);
console.log(person.age);
console.log(Object.getOwnPropertyDescriptor(person, "age").writable);
console.log(Object.getOwnPropertyDescriptor(person, "age").enumerable);
console.log(Object.getOwnPropertyDescriptor(person, "age").configurable);

console.log("=".repeat(50));
// ===== delete property =====
delete person.age;
console.log(person);
person.age = 5;
console.log(person);


person.height = 170;
Object.preventExtensions(person); // blocks adding new fields
person.phone = "5";
console.log(person);

console.log(Object.isExtensible(person));

console.log("=".repeat(50));

Object.seal(person); // blocks everything, except changing values
// can't add new, can't delete
console.log(Object.isSealed(person));
person.age = 50;
console.log(person);

Object.freeze(person); // blocks everything
