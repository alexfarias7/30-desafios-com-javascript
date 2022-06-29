function Square(number) {
    const num = number.toString()
     .split('')
     .map(n => n ** 2)
     .join('')
    return Number(num)
    
}
console.log(Square(28));
