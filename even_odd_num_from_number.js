number = 423456325237846
odd = []
even = []

for(let num of number.toString()) {
   if(parseInt(num) % 2 == 0) {
       even.push(num)
   }
   else{
       odd.push(num)
   }
}

console.log(`Even numbers are : ${even.join("")} and count is: ${even.length}`)
console.log(`Odd numbers are : ${odd.join("")} and count is: ${odd.length}`)