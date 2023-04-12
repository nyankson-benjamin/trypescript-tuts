// ts variables
// const character = "Miles"
// const age = 23
// const isLogedIn = true

//ts functions
const circumference = (diameter:number)=>{
return diameter*Math.PI
}
console.log(circumference(7.5))

//arrays

let names = ['miles', 'Kwesi']
names.push('Ben') // only accept strings because thats what is initialy assigned to
// names.push(23) === will give error
// names.push(true) === will give error

//mix array

let mixedArray = [true, "Miles",34]
mixedArray.push(false)
// mixedArray=[23,'Me', true]
// console.log(mixedArray)

//objects

// let obj = {name:'Ben', skills:'Calculate', age:23}
// console.log(obj)
// obj={name:'Miles', age:34, skills:'Read'}
// console.log(obj)

//explicit types

let namex:string
let age:number
// namex= 32 //this will give error
namex = 'Miles'
age = 33

//arrays
let myAr: string[]=[]
myAr.push('Miles')
// myAr.push(32) this will throw an error


//union types for array

let mixed:(string|number)[] =[]
mixed.push('ben')
mixed.push(33)
// mixed.push(true) this will throw an error cos it has not been initialized to accwpt booleans

//union types for variables

let uid:string|number|boolean

