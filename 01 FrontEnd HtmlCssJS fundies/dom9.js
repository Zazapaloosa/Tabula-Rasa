const first = document.querySelector('input');
const btn = document.querySelector('button');
const holder = document.querySelector('.holder');
const div = document.createElement('div');

const output = document.querySelector('div.output');
output.style.border = '1px solid black';

output.addEventListener('click', adder);


let counter = 0;


first.value = 'zaza';



btn.addEventListener('click', (e)=>{
    holder.innerHTML ='';
    div.textContent = first.value;
    console.log(div);
    const div1 = document.createElement('div');
    holder.append(div1);
    div1.textContent = 'Hello';
    holder.append(div);
    holder.prepend(div);
    div.style.color = 'red';
})




function adder(){
    counter++;
    console.log('clicked');
    const newEle = createEle('div', output, 'hi');
    console.log(newEle);
    newEle.style.backgroundColor = 'blue';
}

function createEle(elType, parent, html){
    const ele = document.createElement(elType);
    ele.innerHTML = html + ' ' + counter;
    //parent.append(ele); //just ffinishes the function
    //return parent.append(ele); tries to reeturn an object but can't use append you need appendChild
    return parent.appendChild(ele);
}

