var a = 1
// [语法] function 函数名(形参) {函数体}
// 函数名(实参)
function fn2() {
    a = a + 10
    a = a/2
}
// fn2() // 函数的调用就是执行对应函数的函数体
// fn2()
// fn2()
// console.log(a)

// function fn() {
//     console.log('hello')
// }
// function fn1() {
//     console.log('world')
// }
// fn() // 函数的调用就是执行对应函数的函数体
// fn()
// fn1()

var a = 0
function fn3(b,c,d) { // 形参的本质是一个变量
    var a = 10
    console.log(b,c,d,'>>>>>')
}
// fn3(a, 20, 30) // 实参的本质是一个值

var a = 100
var b = 200
function fn4(a, b) {
    console.log(a, b) // a b 是私有的 和外界的a b没关系
}
fn4(10, 20) // a = 10 b = 20
fn4('hello', 'world') // a = 'hello' b = 'world'









