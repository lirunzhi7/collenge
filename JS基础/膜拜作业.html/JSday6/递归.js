// function fn(){
//     console.log('hello')
//     fn()
// }
// fn()

// function fn(n){
//     var tt = 0
//     for (var i = 1; i <=n; i++) {
//         tt+=i
//     }
//     return tt
// }
// fn(9)
// console.log(fn(9))

function fn(n){
    if (n===1) return 1
    return n+fn(n-1)
}
fn(9)
console.log(fn(9))


// function fn(n){
//     if (n===1) return 1
//     if (n%2===0) return fn(n-1)
//     return n * fn(n-2)
// }
// console.log(fn(6))
// console.log(fn(7))



function fn(n){
    var p = 1
    if(n === 1) return 1
    if (n%2 === 1) {
        p=p*n
        return fn(n-2)
    }
    else{
        return fn(n-1)
    }
} 
console.log(fn(10))