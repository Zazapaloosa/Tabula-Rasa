console.log('ready');


// can havee $ _ 0-9 a-z A-Z

// can't be a reserved keyword
// below is invalid
// let let

// var was used before let but its best to stick with let and const

let myVar = 'azazel';

console.log(myVar);

/* 
this doesnt work because
its being redeclared not reassigned

let myVar = zaza
*/

myVar = 'zaza';

console.log(myVar);

const info001 =  'let is for reassignable variables,  const is for constants, they cannot be updated or reassigned';


if (true){
    const info001 = 'this is in a different scope';
}


