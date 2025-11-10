const myInput = document.querySelector('.myInput');

const btn = myInput.querySelector('.btn');

// Ways to bind something to button:
// first way: addEventListener()
// second way: use events with name starting "on..."

function show(){
    console.log("CLICK-CLACK");
}

js.onclick = show;
js.onclick = function(){
    const text = myInput.value;
    console.log(text.toUpperCase());

}

myInput.onclick = changeText;

function changeText(event){
    // console.log(event);
    console.log(event.target.value);
    const text = event.target.value;
    event.target.value = text.toUpperCase();
}

const google = document.querySelector('a');
google.onclick = function(e){
    e.preventDefault(); // cancel default behavior
    alert("Not today");
}

//=============================================================
const btn1 =document.querySelector('.btn1');
btn1.addEventListener("click", show); // type "click" must be written precise

myInput.onkeyup = function(e){
    // if (e.keyCode == 13){ // not the best practice
    //     console.log(e);
    // }
    if (e.key === 'Enter'){
        console.log(e);
    }
}


const wrap = document.querySelector('.wrapper');

// this triggered when click on wrapper, on box and on button
// wrap.onclick = function(){
//     console.log("clicked by wrapper");
// }

// wrap.onclick = function(e){
//     e.stopPropagation();
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

const myInput1 = document.querySelector('.myInput');
console.log(myInput1.attributes);
console.log(myInput1.hasAttribute('id'));
myInput1.setAttribute('value', 'myInput1'); // check why not works properly
myInput1.setAttribute("id", "my1");
console.log(myInput1.hasAttribute('id'));

myInput1.removeAttribute('id');
console.log(myInput1.hasAttribute('id'));