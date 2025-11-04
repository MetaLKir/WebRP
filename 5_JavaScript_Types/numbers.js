console.log("Hello World");

let d = 255; // decimal
let b = 0b111; // binary
let o = 0o111; // octodecimal
let h = 0xff; // hexadecimal

console.log(d);
console.log(b);
console.log(o);
console.log(h);

console.log(typeof o);
console.log(d.toString());
console.log(d.toString(2));
// parameter determines what system use to show (dec, hex, binary etc.)
console.log(d.toString(8));
console.log(d.toString(16));
console.log(d.toString(13));

//===== exponential =====
console.log("===== exponential ==================");
let x = 12345.656;
console.log(x.toExponential());
console.log(x.toExponential(2));

//===== fixed =====
console.log("===== fixed ========================");
console.log(x.toFixed(2));
console.log(x.toFixed());

//===== value of =====
console.log("===== value of =====================");
console.log(typeof x.toFixed().valueOf());
console.log(typeof Number(x.toFixed()));

console.log(Number(true));
console.log(Number(false));
console.log(Number("123"));
console.log(Number("    123"));
console.log(Number("123    "));
console.log(Number("123.99"));
console.log(Number("123,99"));
console.log(Number("123 123"));
console.log(Number(new Date("2025-11-04")));

//===== parse =====
console.log("===== parse =====================");
// parseInt - read as number until first non-number symbol
console.log(parseInt("123"));
console.log(parseInt("123.09"));
console.log(parseInt("123 67 89"));
console.log(parseInt("123 text"));
console.log(parseInt("text 123"));
console.log(parseInt("1,123"));
console.log(parseInt("   123"));

// parseFloat - read as number until first non-number
// and not-dot. stops on the second dot
console.log(parseFloat("123.09"))
console.log(parseFloat("123.09.9"))
console.log(parseFloat("123,09"))

console.log(Number.isInteger(123.0));
console.log(Number.isInteger(123.9));
console.log(Number.isInteger(123));

//===== constants =====
console.log("===== constants =====================");
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);

console.log(isFinite(Number.MAX_VALUE));
console.log(isFinite(Number.POSITIVE_INFINITY));
console.log(isFinite(1/0));

console.log(isNaN(10));
console.log(isNaN(0/0));

//===== Math =====
console.log("===== Math =====================");
console.log(Math.round(10.999999));
console.log(Math.max(1, 6, -10, 16));
console.log(Math.pow(2, 6));
console.log(Math.random());
console.log(Math.trunc(10.999999)); // throws out period part
console.log(Math.floor(5.999999)); // rounds to lower bond

//===== randomNumber exercise =====
console.log("===== randomNumber exercise =====================");
function getRandomNumber(rangeFrom, rangeTo) {
    return Math.round(Math.random() * (rangeTo - rangeFrom)  + rangeFrom);
}

console.log(getRandomNumber(1, 5));
