const test = ['testing', 'testing', 1, 2, 3];

for (x in test) {
    //console.log(x);
} // prints out index
for (x in test) {
    //console.log(test.x);
} // DOESNT WORK 
for (x in test) {
    //console.log(test[x]);
} // prints out values (note testing may appear on one line but the notif in console will list msg x2)

for (x of test) {
    //console.log(x);
} // prints values


test.forEach(function(value,index,array){
    //console.log(value);
    //console.log(index);
    //console.log(array);
}); // the standard for the forEach method
test.forEach(function(x,y,z){
    //console.log(y); //index
    //console.log(x); //value
}); // this also works

const myObject = {
    first : 'zaza',
    last : 'nadir',
    species : 'goat',
    sign : 'heptagram'
}

for (x in myObject) {
    //console.log(x);
}
// prints out key
for (let x in myObject) {
    //console.log(x);
}
// this also prints out key


// for (let x of myObject) { // NOT ITERABLE
//  //console.log(myObject.x);
//} // doesnt work
for (let x in myObject) {
    //console.log(myObject[x]);
}
//prints out value
for (let x in myObject) {
    //console.log(myObject.x);
}
//prints out a single undefined






