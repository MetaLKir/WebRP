const set = new Set();
let set1 = new Set([1,2,3,4,5,]);
set.add(5);
set.add("five");
set.add('5');
set.add(5);
set.add("five");

console.log(set);

for(let x of set)
    console.log(x);

console.log(set.keys());
console.log(set.values());
console.log(set.entries()); // key and value are the same

console.log(set.size);

console.log(set.has(6));
console.log(set.has(5));

console.log(set.delete(5)); // delete specific value by key

set.clear(); // delete all from set
console.log(set);


// set to array
let arr = Array.from(set1);
console.log(arr);

console.log("=".repeat(50));
// ===== map ======
const map = new Map();
map.set(1, "Sveta");
map.set("two", "Masha");
map.set(3, 5);

console.log(map);

console.log(map.has("Sveta"));
console.log(map.has(1));

let res1 = map.keys();
console.log(res1);
let res2 = map.values();
console.log(res2);
let res3 = map.entries();
console.log(res3);

console.log(Array.from(map.values()).includes("Sveta"));
console.log([...map.values()].includes("Sveta"));

