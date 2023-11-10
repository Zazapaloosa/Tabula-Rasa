const first = document.querySelector('input[name="first"]');
const last = document.querySelector('input[name="last"]');

const chk = document.querySelector('input[type="checkbox"]');



first.setAttribute('placeholder', 'firstname');
last.setAttribute('placeholder', 'lastname');

first.value = 'zaza';
last.value = 'nadir';

chk.checked = true;