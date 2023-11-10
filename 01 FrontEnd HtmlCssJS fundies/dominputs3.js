const btn = document.querySelector('button');

const h1 = document.querySelector('h1');

const inputs = document.querySelectorAll('input');

inputs.forEach((el)=>{
    el.addEventListener('change', updater);
    el.addEventListener('focus', (e)=>{
        console.log(el.textContent);
        el.style.background = 'red';
        el.style.color = 'white';
    })
    el.addEventListener('blur', (e)=>{
        el.style.background = 'white';
        el.style.color = 'black';
    })
})
function updater(e) {
    const val = e.target.value
    h1.textContent = val;
}











const holder = document.querySelector('.holder');

holder.addEventListener('mouseover', (e)=>{
    holder.style.background = 'red';
});
holder.addEventListener('mouseout', (e)=>{
    holder.style.background = 'white';
});
holder.addEventListener('mousedown', (e)=>{
    holder.style.background = 'blue';
});
holder.addEventListener('mouseup', (e)=>{
    holder.style.background = 'green';
    myEventOutput('test', e);
});



function myEventOutput(a,e){
    console.log(a);

}


/*
h1.addEventListener('click', temp,{once:true});

function temp() {
    console.log('test');
    h1.style.color = 'red';
}

*/

btn.addEventListener('click', adder);
btn.addEventListener('click',(e)=>{
    console.log('two');
});




function adder(e){
    const el = e.target;
    el.removeEventListener('click', adder);
    el.style.color = '#ddd';
    console.log('clicked');
}