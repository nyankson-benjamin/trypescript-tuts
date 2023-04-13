const inputs = document.querySelectorAll('input')
const a = inputs[0].value
const b = inputs[1].value
const c = inputs[2].value

console.log(inputs)
const evaluate =(num:number)=>{
    num = +num ? +num.toFixed(2) : 0;
    return num;
}
console.log(a)
const Quad = (a:number, b:number,c:number)=>{
    const x1 = (-b+Math.sqrt(b*b-4*a*c))/2*a
    const x2 = (-b-Math.sqrt(b*b-4*a*c))/2*a
    return `the roots are ${x1} and ${x2}`
}

const solve = Quad(a,b,c)
console.log(solve)