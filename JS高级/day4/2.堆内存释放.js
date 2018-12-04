

// 堆内存  栈内存：浏览器形成两个虚拟的内存
// var obj = {a:1}
// obj = null //空对象指针
// //在浏览器中开辟的堆内存和栈内存都有相应的回收机制：

// //谷歌浏览器： 每个一段时间会对当前的空间地址进行检测一次，如果发现当前的空间地址没有被占用，会马上对当前的地址进行回收。
// //火狐和IE:浏览器对空间地址的使用采用计数的规则，如果当前空间地址被占用一次，那么该地址就会被记录+1，不使用就会
// //减一，如果计数为0，会对当前地址回收。


// //栈内存： 作用域
// //全局、私有、块级作用域作用：1.给JS代码提供运行环境  2.存储基本数据类型值
// //作用域一旦销毁，作用域下的所有的基本数据类型值都会随时销毁
// //全局作用域的销毁：运行页面时全局作用域不销毁，当关掉页面时，作用域随着销毁。

// //私有作用域的销毁

// // function fn(){
// //     var y = 2
// // }
// // fn()
// // fn()
// // //1.函数执行的每一次，都会形成一个私有作用域，上一次形成的作用域一般会随着销毁
// // //2.不销毁作用域 （1.函数体内部需要返回一个引用的数据类型值 2.函数的返回值需要有变量来接受 3.函数体内部的引用数据类型值被外界占用）
// // //以下情况：
// // //1.函数体内部需要返回一个引用的数据类型值 2.函数的返回值需要有变量来接受
// // var a = 10
// // function fn(){
// //     var a = 1
// //     return function (){
// //         console.log(a)
// //     }
// // }
// // var f = fn()
// // f()
// // // 3.函数体内部的引用数据类型值被外界占用
// // var a 
// // (function (){
// //     var t = 1
// //     a = function (){
// //         console.log(1)
// //     }
// // })()
// // a()

// // //3.不立即销毁的作用域
// // //函数return出一个函数，函数立即执行，不会赋值给其他变量，那么该作用域属于不立即销毁的作用域
// // //当前作用域是销毁或者不销毁跟函数怎么执行也有关系
// // function fn(){
// //     var f = 1
// //     return function (){
// //         console.log(f)
// //     }
// // }
// // fn()()
// // fn()()


// if(1){
//     function a(){

//     }
//     var h = 0
//     let c = h
//     //在块级作用域中let定义的变量，不被外界访问
// }
// a()
// console.log(a)
// console.log(h)
// console.log(c)

// function g1(){
//     this.g1 = 'gg'
// }
// var obj4 = {
//     g1:g1,
//     gg:function (){
//         g1()
//     }
// }

// obj4.gg()
// obj4.g1()
// obj4.g1()

// var a=2;
// var obj1={
//     a:1,
//     fn1:(function (a) {
//         this.a=a;
//         a++;
//         console.log(a);
//         return function () {
//             this.a=a++;
//             console.log(a);
//         }
//     })(a)
// };
// obj1.fn1();3
// // var fn2=obj1.fn1;
// // fn2();4

// var c=3; 4
// function getC() {
//     this.c++;
//     return function (c) {
//         c=this.c*2;
//         console.log(c);
//     }
// }
// var obj3={
//     c:2,
//     getC:(function () {
//         this.c-=1;
//         return this.getC
//     })()
// };
// getC();
// obj3.getC();
// var f3=obj3.getC;
// f3();
// console.log(window.c);
// console.log(obj3.c);


// a = 13;    
// function fn() {
//     console.log(a);13
//     a = 1;
// }
// fn();
// console.log(a);
 
// function f5() {
//     f=ff();
//     return f;
//     function ff() {
//         return console.log(f)
//     };
// }
// console.log(f5())


var c=3; //4
function getC() {
    this.c++;
    return function (c) {
        c=this.c*2;
        console.log(c);
    }
}
var obj3={
    c:2,
    getC:(function () {
        this.c-=1;
        return this.getC
    })()
};
getC();8
obj3.getC();8
var f3=obj3.getC;
f3();8
console.log(window.c);4
console.log(obj3.c);2


function g1() {
    this.g="gg"
}
var obj4={
    g1:g1,
    gg:function () {
        g1();
    }
};
obj4.g1();undefined
obj4.gg();undefined
console.log(obj4);对象
console.log("g" in window);true