const topText = document.querySelector('.topText');
const btn15px = document.querySelector('#size15');
const btn25px = document.querySelector('#size25');
const btn50px = document.querySelector('#size50');
const btnRed = document.querySelector('#red');
const btnGreen = document.querySelector('#green');
const btnBlue = document.querySelector('#blue');


btn15px.onclick = () => topText.style.fontSize = "15px";
btn25px.onclick = () => topText.style.fontSize = "25px";
btn50px.onclick = () => topText.style.fontSize = "50px";
btnRed.onclick = () => topText.style.color = "red";
btnGreen.onclick = () => topText.style.color = "green";
btnBlue.onclick = () => topText.style.color = "blue";
