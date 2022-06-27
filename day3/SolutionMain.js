function reverse (arr){
    const reverseArray =[]
    for (let i = 0; i < arr.length; i++) {
         reverseArray[i] = arr[arr.length -1-i]
        
    }
    return reverseArray
}

console.log(reverse([1,2,3,4,5]));