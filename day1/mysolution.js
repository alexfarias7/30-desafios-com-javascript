function average (num){
let sum = 0
for (const n in num) {
sum += num[n]
}

const average = sum/num.length

return average

}

console.log(average([1,5,8,9,5]));
console.log(average([5,10,5]))
console.log(average([8,9,7]));