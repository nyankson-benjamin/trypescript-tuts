const Quad = (a:number, b:number,c:number)=>{
    const x1 = (-b+Math.sqrt(b*b-4*a*c))/2*a
    const x2 = (-b-Math.sqrt(b*b-4*a*c))/2*a
    return `the roots are ${x1} and ${x2}`
}

const solve = Quad(1,-8,15)
console.log(solve)