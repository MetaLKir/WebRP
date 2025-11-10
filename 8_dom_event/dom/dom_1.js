const div1 = document.querySelector('#div1');
const newP = document.createElement('p');

const newPText = document.createTextNode('Created!');

newP.className = 'active';

newP.appendChild(newPText);
div1.appendChild(newP);

div1.insertBefore(newP, p2);

div1.before("Before");
div1.after("After", newP);

newP.prepend("Prepend-");
newP.append("-Append");

newP.replaceWith("!!!!!!!");

newP.append("_Append");
const newDiv = document.createElement('p');
const newPText1 = document.createTextNode('Created again!');
newDiv.append(newPText1);
div1.replaceWith(newDiv, div1.firstElementChild);