function Chunks (n) {
    if(n===0) return ''
    if(n===1) return 'chunk'
    else{
        return 'chunk-' + Chunks(n-1)
    }
} 

console.log(Chunks(8))