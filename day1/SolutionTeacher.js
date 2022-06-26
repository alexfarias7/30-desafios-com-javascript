function Average (...numbers){
    const sum = numbers.reduce((ac, n)=> ac+n,0)
    return sum/numbers.length
}

console.log(Average(5,3,4,6))
console.log(Average(10,5));
console.log(Average(5,2,8,6,5));