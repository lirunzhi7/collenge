// function fn1(a,b,c){
//     console.log(a,b,c)
//     console.log(arguments[3])
//     a='hello'
//     b='world'
//     console.log(a,b,c)
//     console.log(arguments)
//     arguments[2]='seeyou'
//     console.log(a,b,c)
//     console.log(arguments)
// }
// fn4(1,2,3,4)
// var a = 0
// function fn4(){
//     console.log(a)
//     return 'hello'
// }
// console.log(fn4())

// function add(){
//     var b = [1,2,4,6,8]
//     total=eval(b.join('+'))
//     console.log(total)
// }
// var total = add(1,2,4,6,8)


function add(){
    var total = 0
    for (var i = 0; i < arguments.length; i++) {
        total+=arguments[i]
    } 
    return total
}
var t = add(1,2,4,6,8)
console.log(t)


// var total = add(1,2,4,6,8,'9','12hellow',true)

// function add(){
//     var total = 0
//     for (var i = 0; i < arguments.length; i++) {
//         Number(arguments[i]) ? (typeof arguments[i]=='boolean' ? null : total+= +arguments[i]): null
//     }
//     return total
// }
// console.log(total)










