let str = "Hello World";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.charAt(7));
console.log(str.indexOf("World"));
console.log(str.indexOf("world"));
console.log(str.indexOf("l", 4));
console.log(str.includes("world"));
console.log(str.startsWith("  He"));
console.log(str.startsWith("Wo"));
console.log(str.substring(4, 7));
console.log(str.slice()); // improved substring
console.log(str.slice(3,8));
console.log(str.slice(-8, -3));
console.log(str.slice(-3));

let str1 = "  ggg  ";
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());

console.log(str.split(" "));
console.log(str.repeat(3));
console.log(str.replace("Hello", "bye"));

let str2 ="die die, Beautiful";
console.log(str2.replaceAll("die", "hi"));


