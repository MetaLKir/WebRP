const updateBtn = document.querySelector('#updateBtn');
const inputTextColor = document.querySelector('#tColor');
const inputTextSize = document.querySelector('#tSize');
const bottomText = document.querySelector('#bottomText');

function updateBottomText(color, fontSize) {
    bottomText.style.fontSize = fontSize + 'px';
    bottomText.style.color = color;
}

updateBtn.onclick = () => updateBottomText(inputTextColor.value, inputTextSize.value);