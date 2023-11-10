const output = document.querySelector('.output');

console.log(output.style);

output.style.color = 'red';
console.log(output.style.color);


const ele1 = document.querySelector('div.output');
ele1.style.background = '#0000ff';
ele1.style.color = 'rgb(255,255,255)';
ele1.style.padding = '10px';
ele1.style.border = '2px solid black';
ele1.style.borderColor = 'green';
ele1.style.fontSize = '2em';


ele1.setAttribute('style', '');


const eles = document.querySelectorAll('div');
//console.log(eles);
eles.forEach((el, index)=>{
    console.log(el);
    el.style.textTransform = 'uppercase';
    if(el.classList.contains('output')){
        el.innerHTML += '***output';
    }
    el.classList.add('box');
    el.classList.remove('output');
    el.classList.toggle('active');
    el.setAttribute('id','id'+(index+1));
    console.log(el.classList.contains('active'));
});