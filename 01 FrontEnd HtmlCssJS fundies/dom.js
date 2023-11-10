const ele1 = document.getElementById('myEle');

console.log(ele1);

const ele2 = document.querySelector('.output');
// below is like css, div with a .output child
//const ele2 = document.querySelector('div .output');
console.log(ele2);


const val1 = 'h1';
const ele3 = document.querySelector(val1);
console.log(ele3);


const ele4 = document.querySelector('#myEle');
console.log(ele4);


console.log(ele1.textContent);
ele1.textContent = 'IM A BAH';
console.log(ele4.textContent);



const myObj1 = {
    first : 'bleamt'
}

const myExamplePointer1 = myObj1;
const myExamplePointer2 = myObj1;
myExamplePointer1.first = 'oh woah';
console.log(myExamplePointer2);