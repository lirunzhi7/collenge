
// console.log(a)
// var a = 10
 
// console.log(i)
// for (var i = 0; i < 10; i++) {}
// console.log(i)

// // console.log(f)
// if(!console.log(f)){
//     function f(){
//     }
//     console.log(f)
// }
// console.log(f)
// for (var i = 0; i <4; i++) {
//     console.log(i)
// }
// console.log(i)
// var a = 2
// if(1==1){
//     console.log(a)
//     var a = 3
//     console.log(a)
// }
// console.log(a)

// var a = 10
// var b = 11
// function f(a){
//     console.log(a)
//     a = 20
//     b = 30
// }
// f(a)
// console.log(a)
// console.log(b)


//函数执行时，形成一个私有作用域，和他在哪执行没有关系，和他在哪形成有关系。
// var c = 20
// function fn() {
//     console.log(c)
// }
// fn()

// function f(){
//     var c = 99
//     fn()
// }
// f()

//arguments.callee 返回函数本身
//arguments.callee.caller 返回在哪执行的函数  在全局下是null
// var c = 20
// function fn() {
//     console.log(arguments.callee.caller)
// }
// fn()

// function f(){
//     var c = 99
//     fn()
// }
// f()


//
// var n = 10
// function fn(){
//     var n = 20
//     function f(){
//         n++
//         console.log(n)
//     }
//     f()
//     return f
// }
// var x = fn()
// x()
// x()
// console.log(n)

//闭包几种形式  :作用：保护和保存作用，保护私有变量不受外界干扰；形成不销毁的栈内存，把一些值保存下来。

//柯理化函数
// function fn(){
//     return function (){}
// }
// var f = fn()

// //惰性函数
// var utils = (function(){
//     return {}
// })()

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i)



//回顾

//1.变量提升   作用域



// console.log(fn)
// if(1==2){
//     console.log(fn)
//     function fn(){

//     }
// }
// console.log(fn)

// console.log(f)
// if(1==1){
//     console.log(f)
//     function f(){

//     }
// }
// console.log(f)
// console.log(f)
// if(1==1){
//     console.log(f)
//     let a = 100
//     function f(){
//     }
// }
// console.log(f)


// var a = 20
// function fn(a){
//     console.log(a)
//     a = 30
//     console.log(a)
// }
// fn(21)
// console.log(a)

// var  p = [1,2,3]
// function fn(){
//     p[0]=99
//     console.log(p)
// }
// fn()
// console.log(p)


// function fn(){
  
// }
// var a = new fn()
// console.log(new fn())



// var  obj = {a:2,b:3}
// var obj1 = new Object()

// var a = 12
// var b = new String(12)
// console.log(a+b)


var a = 10
function fn(a){
    a = 20
    console.log(a)
}
fn(30)