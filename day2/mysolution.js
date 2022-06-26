function Chunks (number) {
  
    if (number === 0) return ''
    if (number === 1) return'chunk' 

    let arr = ['chunk '].toString().repeat(8).replace(/\s+/g, '-')
    return arr 
    
}

console.log(Chunks())