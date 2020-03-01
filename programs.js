// #1 Print sum of all digits of given number
const reducer = (accumulator, currentValue) => accumulator + currentValue
var num = 12345
var num_arr = num.toString().split("").map(num => parseInt(num))
sum_of_all_element = num_arr.reduce(reducer)
console.log(sum_of_all_element)

//#2 Sort array without using inbuilt functions
var arr = [32,52,66,2,67, 67, 22]
for(let i=0; i < arr.length -1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] > arr[j]) {
            var temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
}

// #2 Find second heighest num from array
var arr = [32,52,66,2,67,22]
console.log(Array.from(new Set(arr.reverse()))[1])