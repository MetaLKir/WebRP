function getId() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Math.round(Math.random() * 1000)), 1000);
    });
}

function getUserName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Oleg"), 500);
    })
}

let promiseId = getId();
let promiseUserName = getUserName();

Promise.all([promiseUserName, promiseId])
    .then(arr => console.log(`id${arr[1]}, username: ${arr[0]}`));
// wait when all get result

//====================================================
Promise.race([promiseUserName, promiseId])
    .then((data) => console.log(data));
// wait until one of vars get result

//====================================================
setTimeout(()=>console.log("timeout"));
Promise.resolve().then(()=>console.log("promise")); // higher priority than timeout and other
console.log("code")

// queueMicrotask() // allows to change priority
