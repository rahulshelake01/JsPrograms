let fib = []


function get_fib_array(n) {

    for(let i=0; i<n;i++) {
        if(i == 0 || i == 1) {
            fib.push(i)
        } 
        else{
            fib.push(fib[fib.length-1] + fib[fib.length-2])
        }
    }
    
    return fib
}


a=0;b=1
function get_fib_loop(n) {
    for (let i= 0; i < n; i++) {
        if(i == 0 || i == 1) {
            console.log(i)
        } 
        else {
            console.log(a+b)
            b=a+b
            a=b-a
        }
    }
}

console.log(get_fib_array(10).join(", "))
//get_fib_loop(10)