// const div1= document.getElementById("div1");
// const p1= document.getElementsByClassName("p1");
// const p=document.getElementsByTagName("p");

const div1 = document.querySelector("#div1");
const p1 = document.querySelector(".p1");
const p = document.querySelector("p");

console.log(div1);
console.log(p2);
console.log(p);

const pAll = document.querySelectorAll("p");
console.log(pAll);
const pDiv = document.querySelectorAll("div>p");
console.log(pDiv);
console.log(pDiv[0].innerText);
console.log(pDiv[1].innerHTML);
div1.style.border = "1px solid red";

for (let i = 0; i < pDiv.length; i++) {
    pDiv[i].innerHTML = `<span> new ${i + 1} text </span> `;
}

const outer = document.querySelector('#outer')
outer.className = 'header';
outer.className += ' active';
outer.classList.toggle('active');

setTimeout(() => {
    outer.classList.remove('active');
}, 2000);
setTimeout(() => {
    outer.classList.add('active');
}, 2000);

const box = document.querySelector('#box');
const container = document.querySelector('#container');
let pos = 0;
let t = setInterval(move, 25);

function move() {
    pos++
    if (pos >= container.offsetWidth/2 - box.offsetWidth/2) {
        clearInterval(t);
        return;
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

const children = div1.children;
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}

div1.firstElementChild.nextElementSibling.style.color = 'green';
div1.firstElementChild.nextElementSibling.nextElementSibling.style.color = 'purple';

p1.parentElement.style.background = "blue";