//#1. Find the repeated elements.
var arr = [1,3,2,4,6,3,2,1,4,6,1,9]
var count_wise_arr_obj = {}

for (let val of arr) {
    count_wise_arr_obj[val] = (count_wise_arr_obj[val] == undefined) ? 1 : count_wise_arr_obj[val] + 1
}

console.log(count_wise_arr_obj)
Object.keys(count_wise_arr_obj).map((key) => {
    if (count_wise_arr_obj[key] > 1) {
        console.log(key)
    }
})


//#Delete the number from any position
//1. Using splice
var arr = [1,2,3,4,5,6,7,8,9]
var position = 3 // Delete 3rd number
var deleted_ele =  arr.splice(position-1, 1)
console.log(arr)

//2. Using delete
var arr = [1,2,3,4,5,6,7,8,9]
delete arr[3]
var new_array = arr.filter(v => v)