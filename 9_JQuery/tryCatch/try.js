let person1 = {name: 'Masha'};

// function printName(obj) {
//     console.log(obj.name);
// }
//
// printName(person1);
//
// person1 = null;
//
// printName(person1);

function printName(obj) {
    try {
        console.log(obj.name);
        console.log(obj.surname);
    } catch (e) {
        console.log("My catch error: " + e.message);
        console.log(e);

    } finally {
        console.log("finally block");
    }
    console.log("=".repeat(25));
}

printName(person1);

person = null;
printName(person);

function division(a, b) {
    if (b !== 0)
        return a / b;
    throw new RangeError("division by ZERO .!.")
}

// COMMON ERRORS
// Error - unspecified error
// EvalError — ошибка при неправильном использовании eval()
// InternalError — внутренняя ошибка движка JS (редко, например, переполнение стека)
// RangeError — значение выходит за допустимый диапазон (например, отрицательная длина массива)
// ReferenceError — обращение к несуществующей переменной или функции
// SyntaxError — ошибка в синтаксисе кода (например, пропущена скобка)
// TypeError — неправильный тип данных или попытка вызвать не-функцию
// URIError — ошибка при неправильном использовании функций encodeURI / decodeURI

// console.log(division(10, 0));

try {
    let res = division(10, 0);
    console.log(res);
} catch (e) {
    console.log(e.name + " => " + e.message);
    console.log("=".repeat(25));
}

console.log("end");