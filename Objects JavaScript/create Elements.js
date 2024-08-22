console.log("Wellcome");

let element=document.createElement('li');


// // let text=document.createTextNode('I am a text node');
// element.appendChild(text);
//Add a class name to this elements:

element.className='childul';
element.id='elem1';
// let sel=document.querySelector('#elem1');
// sel.style.color = 'blue';
element.setAttribute('title','mytitle' );
element.innerText='<b>Hello this is created by Muneer</b>';
element.innerHTML='<b>Hello this is created by Muneer</b>';

let ul=document.querySelector('ul.this');
ul.appendChild('element');
document.getElementById("elem1").appendChild(element);
console.log(ul);
console.log(element);