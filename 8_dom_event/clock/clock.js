const clock = document.querySelector('#clock');

function printTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const h1 = document.createElement("h1");
    const time = document.createTextNode(
        `${hours < 10 ? '0' + hours : hours}:
        ${minutes < 10 ? '0' + minutes : minutes}:
        ${seconds < 10 ? '0' + seconds : seconds}`);
    h1.append(time);
    if (clock.firstElementChild) {
        clock.replaceChild(h1, clock.firstElementChild);
    } else {
        clock.append(h1);
    }
}

setInterval(printTime, 1000);