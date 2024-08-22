let a=document;
a = document.all;
// a=document.body;
// a=document.forms;
// a=document.links;
// Array.from(a).forEach(function(element)
// {
//     console.log(element);
// })             



            //  SINGLE ELEMENT
let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;

element.innerText='Hello Malik Muneer';

element=element.style.color='red';
element.innerHTML="<b>Hello Malik Muneer</b>";
console.log(element);



            //  JQUERY
// let sel=document.querySelector('#myfirst');
//  sel = document.querySelector('.child');
//  sel=document.querySelector('div');
// sel.style.color='green';
// console.log(sel);





              //  Multi Element Selector:
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
// console.log(elems);
Array.from(elems).forEach(element=>{
    console.log(element);
    element.style.color='blue';
})
