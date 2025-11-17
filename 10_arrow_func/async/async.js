// [1,2,3,4,5,6,7,8,9,10].forEach(n=> console.log(n));

// let count = 100;
// let ind = setInterval(() => console.log(count--), 1000);
// console.log(ind);
// // // console.log("end of code!!!");
// //
// // test();
// // function test() {
// //     for (let i = 0; i < 10; i++) {
// //         console.log(count--);
// //     }
// // }
// // console.log("end of code!!!");
//
// let ind1 = setTimeout(() => {
//     console.log("Time out");
//     clearInterval(ind)
// }, 5000);
// console.log(ind1);

//========================================
// function sleep(timeout, func){
//     let running = true;
//     setTimeout(func, timeout);
//     // while(running){
//     //
//     // }
// }
//
// sleep(3000, ()=>console.log("after 3 seconds"));
// // console.log('after 3 seconds');

//==========================================
// function getId(maxId, fn1, fn2) {
//     setTimeout(() => {
//             let id = Math.round(Math.random() * maxId);
//             fn1(id, fn2);
//         },
//         100);
// }
//
// function getUser(id, func) {
//     setTimeout(() => {
//             let user = {id, name: "Oleg"};
//             func(user);
//         },
//         100);
// }
//
function displayUser(user) {
    console.log(user);
}

// getId(1000, getUser, displayUser);

//=================PROMISE=========================
// then
// catch

function sleep(timeout) {
    return new Promise(resolve => setTimeout(() => resolve(), timeout));
}

sleep(3000).then(() => console.log('after 3 seconds'));


function getId(maxId) {
    return new Promise(resolve => setTimeout(() => {
        let id = Math.round(Math.random() * maxId);
        resolve(id);
    }, 100));
}

function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            let user = {id, name: "Oleg"};
            resolve(user);
        }, 100);
    })
}

getId(1000).then(getUser).then(displayUser);

//=========================================
function willBeAnswer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isIAngry = Math.random() > 0.5;
            if (isIAngry)
                reject(new Error('I am angry'))
            else
                resolve({answer: "You are lucky", answers:[1,2,3,4,5]});
        }, 1000)
    })
}
willBeAnswer().then(console.log).catch(console.log);
willBeAnswer().then(r => console.log(r.answer)).catch(r => console.log(r.message));
