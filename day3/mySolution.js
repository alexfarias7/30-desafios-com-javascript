function reverse(...value) {
    let arr = [];
    while (value.length) {
      arr.push(value.pop());
    }
  
    return arr;
  }
  const array1 = [1,2,3,4,5]
  
  console.log(reverse(...array1));
  console.log(array1);