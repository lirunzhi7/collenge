var a = 1
// 函数申明与调用
// function 函数名(形参) {函数体}
// function fn(b, c) {
//     console.log(b,c)
//     a += 10
//     a /= 2
// }
// // 函数运行： 函数名(实参)
// fn()
// fn(10, 20)
// fn() 
// console.log(a) // 8.875

// 实参集合 arguments
// function fn1() {
//     // console.log(arguments[0],arguments[1],
//     //     arguments[2],arguments[3],arguments)
//         // 1, 2, 3, 4, [1,2,3,4](类数组)
//     console.log([] instanceof Array, arguments instanceof Array)
//     // true false
// }
// fn1(1,2,3,4)
// 形参跟随
function fn2(a,b) {
    console.log(a, b) // 10 20
    console.log(arguments) // [10, 20]
    a = 'hello'
    console.log(a, b) // hello 20
    console.log(arguments) // ['hello', 20]
    arguments[1] = 'world'
    console.log(a, b) // hello world
    console.log(arguments) // ['hello', 'world']
}
// fn2(10,20)
// 私有变量
// var b = 10
// var c = 30
// function fn3(a, b) {
//     // a, b 是形参 就是私有变量
//     console.log(b) // 5
//     b = 20
//     // c 也是私有变量
//     var c = 40
//     console.log(a, c) 
//     // 1 40
// }
// fn3(1, 5)
// console.log(b, c) // 10 30

var arr = [1,2] // [2,2]
function fn4(a, b) {
    console.log(arguments) // [a] => [aaafff000] => [[1,2]]
    // a私有变量 = aaafff000
    a[0] = 2
    console.log(arguments[0]) // [2,2]
    // // arguments[0] = a = aaafff111
    arguments[0] = []
    a[0] = 3
    console.log(a) // [3]
}
// fn4(arr) // arr = aaafff000
// console.log(arr) // [2,2]


// var arr = [1,2]
// var arg = [arr] // [[1,2]]
// var a = arg[0] // a = [1,2]
// a[0] = 2 // [2,2]
// console.log(arr) // [2, 2]

// var arr = [1,2]
// function fn5(a) {
//     a[0] = 2
//     a = []
//     a[0] = 3
//     console.log(a)
// }
// fn5(arr)
// console.log(arr)

// arr = [1,2]
// var a = arr
// a[0] = 2
// a = []
// a[0] = 3
// console.log(a) //[3]
// console.log(arr) // [2,2]

var a = 0
function fn6() {
    var a = 10
    console.log(a) // 10
    return // return后面的代码不再执行
    console.log('hello') 
}
// fn6()
function fn7() {
    console.log('>>')
    var a = 'hello'
    return a // 将a存储的值返回 也就是返回'hello'
}
// 1. fn7()函数执行
// 2. 代表一个值 这个值是函数里面return后面跟着的值，
// 如果没有return就是undefined
console.log(fn7()) // 'hello'





function add() {
    // 私有变量 = 0
    var total = 0
    // 循环 arguments => [1,2,4,6,8]
    for (var i = 0; i < arguments.length; i++) {
        var cur = arguments[i] // 私有变量累加
        if (typeof cur === 'string') {
            cur = +cur // +cur === Number(cur)
        } else if (typeof cur === 'number') {
        } else { // 如果不是string和number会进入continue
            continue
        }
        isNaN(cur) ? null : total += cur // 只有cur是number或者string时候执行
    }
    // 将变量返回
    return total
}
var total = add(1,2,4,6,8,'9','12hello',true, NaN)
console.log(total) // 30






