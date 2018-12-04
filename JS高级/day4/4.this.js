

// console.log(this)

// //1.在全局作用域下，this和window 指向同一个堆内存，代表同一个地址
// var a = 10
// console.log(this.a)
// console.log(window.a)

// //2.给元素的事件绑定方法，方法中的this指向被绑定的那个元素  （选项卡实例）

// divs[0].onclick=function(){
//     console.log(this)
// }

// //3.看函数执行前有没有"."如果有点前面是谁就是谁，没有的话就是window
// var obj = {
//     n:1,
//     fn:function (){
//         console.log(this)
//     }
// }
// obj.fn()//this 指的是obj
// var f = obj.fn
// f()  //this 指的是window

// //4.自执行函数中的this永远指的是window

// // (function(){
// //     console.log(this)
// // })()

// var obj={
//     fn:(function(){
//         console.log(this)
//         return function (){
//             console.log(this)
//         }
//     })()
// }
// var f = obj.fn
// f()  //this 指的是window
// obj.fn()  //this 指的是obj


//5.在定时器中的this指向window

// setTimeout(function(){
//     console.log(this)
// },1000)
//6.类中的this指的是实例





//习题
// var num =2;
// var obj = {
//     num : 0,
//     fn : function () {
//         num = 1;
//         (function (num) {
//             ++this.num;
//             num++;
//             console.log(num) //1
//         })(this.num)
//     }
// }
// obj.fn();
// console.log(window.num,obj.num);//2 , 0

// var num =1;
// var obj = {
//     num : 2,
//     fn : (function () {
//         this.num *= 2;
//         num +=3;
//         var num =1;
//         return function () {
//             num +=2;
//             this.num +=2
//             console.log(++num)
//         }
//     })()
// };
// var f= obj.fn;
// f(); //4
// obj.fn(); // 7
// console.log(window.num,obj.num)//4 ,4



// var a=2;
// var obj1={
//     a:1,
//     fn1:(function (a) {
//         this.a=a;
//         a++;
//         return function () {
//             this.a=a++;
//             console.log(a);
//         }
//     })(a)
// };
// obj1.fn1();3
// var fn2=obj1.fn1;
// fn2();4


