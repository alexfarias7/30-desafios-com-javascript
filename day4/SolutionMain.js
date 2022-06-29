function square ( num){
    return Number(num.toString().split('').map(n=>n**2).join(''))
}

console.log(square(25));