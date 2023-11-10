const btn = document.querySelector('button');
let counter = 0;


btn.addEventListener('click',btnClicked);


function btnClicked(e){
    console.log(e.target);
    counter++;
    console.log('clicked '+ counter);
    e.target.textContent = 'Clicked ('+counter+')';
    e.target.classList.toggle('box');
    
}


const h1 = document.querySelector('h1');
h1.onclick = btnClicked;


const holder = document.querySelector('.holder');
const holderDivs = holder.querySelectorAll('div');
console.log(holderDivs);

console.clear();
holderDivs.forEach((el,ind, obj)=>{
    el.style.border = '1px solid black';
    el.style.padding = '10px';
    const val = el.className;
    el.onclick = function(){
        console.log('onclick' + val);
    };
    el.addEventListener('click', (e)=>{
        console.log('event False ' + val);
    },false); //this means propagation is falsee
    // event listeners will propagates from the nested to the parent
    el.addEventListener('click', (e)=>{
        console.log('event True ' + val);
    },true); //this meeans propagation is true
    // propagates from the parent to the nested
    
})