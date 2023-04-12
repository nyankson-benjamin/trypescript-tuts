// ts variables
// const character = "Miles"
// const age = 23
// const isLogedIn = true
//ts functions
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumference(7.5));
//arrays
var names = ['miles', 'Kwesi'];
names.push('Ben'); // only accept strings because thats what is initialy assigned to
// names.push(23) === will give error
// names.push(true) === will give error
//mix array
var mixedArray = [true, "Miles", 34];
mixedArray.push(false);
// mixedArray=[23,'Me', true]
// console.log(mixedArray)
//objects
// let obj = {name:'Ben', skills:'Calculate', age:23}
// console.log(obj)
// obj={name:'Miles', age:34, skills:'Read'}
// console.log(obj)
//explicit types
var namex;
var age;
// namex= 32 //this will give error
namex = 'Miles';
age = 33;
//arrays
var myAr = [];
myAr.push('Miles');
// myAr.push(32) this will throw an error
//union types for array
var mixed = [];
mixed.push('ben');
mixed.push(33);
// mixed.push(true) this will throw an error cos it has not been initialized to accwpt booleans
//union types for variables
var uid;
