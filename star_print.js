// #1
//     *
//    * *
//   * * * 
//  * * * *
// * * * * *

var lines = 5
for(let i = 1; i<=lines; i++) {
    star_line = ""
    for(let j=0; j<i; j++) {
        star_line = star_line + " *"
    }
    console.log(star_line)
}


// #2.
//     *
//    * *
//   * * * 
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     * 
var lines = 9
var middle = Math.round(lines/2)
for(let i = 1; i<=lines; i++) {
    star_line = ""
    total_star = i > middle ? (middle- (i-middle)) : i
    for(let j=0; j< total_star; j++) {
        star_line = star_line + "*"
    }
    console.log(star_line)
}

