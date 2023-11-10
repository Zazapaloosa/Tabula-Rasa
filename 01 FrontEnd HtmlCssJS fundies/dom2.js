const outputs = document.querySelectorAll('.output');
let html = '<div style="color:red">Azazel <br> Nadir</div>';



console.log(outputs[0].tagName);



outputs.forEach(function(ele) {
    if(ele.tagName != 'H1') {
        ele.innerHTML = html;
    }
})


outputs.forEach((ele, ind)=>{ //modern format, shorter, doesnt usee keeyword
    if(ele.tagName != 'H1') {
        ele.innerHTML = html;
    }
    ele.innerHTML += ' ' + ind;
})