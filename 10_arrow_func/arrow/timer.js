// function Timer(seconds){
//     this.cnt = seconds;
//     this.tick = function() {
//         this.cnt--;
//         console.log(this.cnt);
//     }
// }
// let timer = new Timer(100);
// console.log(timer.cnt);
// setInterval(timer.tick, 1000);
// timer.tick();
// timer.tick();
// timer.tick();
// timer.tick();
// console.log(timer.cnt);

// setInterval(function() {timer.tick()}, 1000);

// setInterval(timer.tick.bind(timer), 1000);

function Timer(seconds){
    this.cnt = seconds;
    this.tick = () => {
        this.cnt--;
        console.log(this.cnt);
    }
}

let timer = new Timer(100);

setInterval(timer.tick, 1000);