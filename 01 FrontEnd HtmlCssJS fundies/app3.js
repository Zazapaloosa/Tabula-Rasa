

console.log('when a string is given, the rest will be turned into a string');
console.log(100 + 100 + '100');
console.log('100' + 100 + 100 + '100');


const myArr = ['stringy', 420, true];

console.log(myArr);
myArr[0] = 'even though this array was declared as const you can change the content'

console.log(myArr);
console.log(myArr[0]);
console.log(typeof(myArr));
console.log(typeof myArr);

/*
look at javascript objects and arrays to store multiple values in the same variable */



/*
javascript function expression vs declaration
https://medium.com/backenders-club/function-declaration-vs-function-expression-in-javascript-when-to-use-them-2edc7d3e76a2
*/

/* 
//these would error
func1();
func2();
*/

let func1 = function() {
    console.log('func1');
}

const func2 = function() {
    console.log('func2');
}

//this wouldn't
// func3();

function func3() {
    console.log('func3');
}


//immediately invoked
const func4 = function(){
    console.log('func4');
}();
console.log(func4); // func 4 is undefined
func4; //doesent return anything
//func4(); // func4 is not a function the insides are an anonymous function

//immediately invoked
const func5 = function(){
    console.log('func5');
    return 5;
}();
console.log(func5); 
func5; //returns nothing, the return passes it into nothing
//func5(); //not a function
console.log(1+func5); //6
//console.log(1+func5()); //errors