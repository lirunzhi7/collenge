
// function fn(){
//     console.log(b)
//     console.log(f)
//     return function(){}
//     var b = 10
//     function f(){

//     }
// }
// fn()


// function f(){
//     console.log('q')
//     return 10
// }
// console.log(f())


// var ulis = (function(){
//         function sum(){

//         }
//         function s(){

//         }
//         return {
//             sum:sum,
//             s:s
//         }
//     })()

//     ulis.sum()
//     ulis.s()


// var body1 = document.body.clientHeight

// var bbdd = document.body.offsetWidth
// console.log(bbdd)
// console.log(body)

// var q = [40,23,35,11,10,2]
// q.sort(function(a,b){
//     console.log(a,b)
//     return a-b
// })
var lis = document.getElementsByTagName('input')
var ary = ['red','yellow','green']
// for (var i = 0; i < lis.length; i++) {
//     lis[i].onclick= (function(a){
//         return function(){
//             document.body.style.background=ary[a]}
//     })(i)
// }

// for (let i = 0; i < lis.length; i++) {
//     lis[i].onclick=function(){
//         document.body.style.background=ary[i]
//     }
// }

// for (var i = 0; i < lis.length; i++) {
//     lis[i].ppp=i
//     lis[i].onclick=function(){
//         document.body.style.background=ary[this.ppp]
//     }
// }

// function f5() {
//     f=ff();
//     return f;
//     function ff() {
//         return "f" in window;
//     };
//     var f;
// }
// console.log(f5());

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
// obj1.fn1();
// var fn2=obj1.fn1;
// fn2();

// var a = 9;//0  1
//     function ss() {
//         a = 0; //1 
//         return function (b) {
//             return b + (a++)
//         }
//     }
//     var f = ss();
//     var m = f(5);
//     console.log(m);5
//     var n = ss()(5);
//     console.log(n);
//     var x = f(5);
//     console.log(x);
//     console.log(a);


    
// var i = 2
// function fn(){
//     i*=2
//     return function(n){
//         console.log(n*(++i))
//     }
// }
// var  f = fn()
// f(3)
// fn()(3)
// f(4)
// fn()(4)


//考试题，相当于选项卡主要考虑变量问题
// var lis = document.getElementsByTagName('input')
// var ary = ['red','yellow','green']
// for (var i = 0; i < lis.length; i++) {
//     lis[i].ppp=i
//     lis[i].onclick=function(){
//         document.body.style.background=ary[this.ppp]
//     }
// }

// for (var i = 0; i < lis.length; i++) {
//     lis[i].onclick=(function(a){
//         return function () {
//             document.body.style.background=ary[a]
//         }
//     })(i)
// }

// for (let i = 0; i < lis.length; i++) {
//     lis[i].onclick=function(){
//         document.body.style.background=ary[i]
//     }
// }


// function fn(num){
//     this.x=this.y=num
// }
// fn.prototype={
//     x:20,
//     sum:function(){
//         console.log(this.x+this.y)
//     }
// }
// var f=new fn(10)
// console.log(f.sum===fn.prototype.sum)
// f.sum()
// fn.prototype.sum()
// console.log(f.constructor)

//数组去重
//  var ary = [12,12,13,13,14,14]

//  for (var i = 0; i < ary.length; i++) {
//      var cur = ary[i]
//      for (var k = i+1; k < ary.length; k++) {
//          if(cur==ary[k]){
//              ary.splice(k,1)
//              k--
//          }
//      }
//  }
//  console.log(ary)

//  var ary = [12,12,13,13,14,14]
//  function fn(ary){
//     var obj = {}
//     for (var i = 0; i < ary.length; i++) {
//         var cur = ary[i]
//         if(obj[cur]===undefined){
//             obj[cur]=cur
//         }else{
//             ary.splice(i,1)
//             i--
//         }
//     } 
//     return ary
//  }
//  console.log(fn(ary))

//原型应用以及拓展

//  function Fn(){
//     this.x = 100;
//     this.y = 10;
//     this.getX  = function () {
//         return this.x
//     }
// }
// Fn.prototype.getX = function () {
//     return this.x+this.y;
// }
// var f = new Fn;
// // console.log(f.getX === f.__proto__.getX);//false
// // console.log(f.getX === Fn.prototype.getX);//false
// // console.log(f.__proto__.getX === Fn.prototype.getX);//true
// // console.log(f.__proto__.__proto__.getX === Fn.prototype.getX);//false
// console.log(f.toString);//f tostring(){[nativecode]}
// console.log(f.toString());//'[object Object]'
// // console.log(Fn.constructor);//Fuction
// // console.log(f.constructor);//Fn


// var  ary = [12,3,4,12,3,4,88];

// function fn(ary){
//     var obj = {}
//     for (var i = 0; i < ary.length; i++) {
//         var cur = ary[i]
//         if(obj[cur]===undefined){
//             obj[cur]=1
//         }else{
//             ary.splice(i,1)
//             i--
//         }
//     }
//     return ary
// }
// console.log(fn(ary))

// var  ary = [12,3,4,12,3,4,88]

// function fn(ary){
//     var obj = {}
//     for (var i = 0; i < ary.length; i++) {
//         var cur = ary[i]
//         if(obj[cur] !== undefined){
//             ary[i] = ary[ary.length-1]
//             ary.pop()
//             i--
//         }else{
//             obj[cur]=true
//         }
//     }
//     return ary
// }

// console.log(fn(ary))





// Array.prototype.fn=function (){
//     var obj = {}
//    for (var i = 0; i < this.length; i++) {
//        var cur = this[i]
//         if(obj[cur]===undefined){
//             obj[cur]=1
//         }else{
//             ary.splice(i,1)
//             i--
//         }
//     }
//    return ary//可以不用retrun ,其实ary传入改变的都是同一个地址
// }
// var  ary = [12,3,4,12,3,4,88];
// console.log(ary.fn().pop())


// Number.prototype.plus=function(){
//     return this+3
// }
// Number.prototype.nus=function(){
//     return this-2
// }
// var n = 5
// var res = n.plus(3).nus(2)
// console.log(res)


// Array.prototype.moPop=function(n){
//     for (var i = 0; i < arguments.length; i++) {
//         this[this.length]= arguments[i]
//     }
//     return this.length}
// var ary = [1,2,3]
// console.log(ary.moPop(77,99))


// Array.prototype.moPop=function(){
//     var aa = []
//     var k = 0
//     for (var i = 0; i < this.length-1; i++) {
//        if(k < this.length) {
//            aa[k]=this[i]
//             k++
//        }
//     }
//     return aa
// }
// var ary =  [1,2,3,6,10]
// console.log(ary.moPop(m,n))

// Array.prototype.moPop=function(m,n){
//     for (var i = 0; i < 2; i++) {
//         if(m>n&&n>0){

//         }
//     }
// }
// var ary =  [1,2,3,6,10]
// console.log(ary.moPop(m,n))


// function fn(){

// }
// var f = new fn()
// console.log(f instanceof fn)
// console.log(fn instanceof Function)
// console.log(Function instanceof Object)





// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//    console.log(2);
// };
// Foo.prototype.getName = function () {
//    console.log(3);
// };
// var getName = function () {
//    console.log(4);
// };
// function getName() {
//    console.log(5);
// }
// Foo.getName();报错
// getName();4
// Foo().getName();4
// getName();4
// new Foo.getName();报错
// new Foo().getName();4
// new new Foo().getName()


// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//    console.log(2);
// };
// Foo.prototype.getName = function () {
//    console.log(3);
// };
// var getName = function () {
//    console.log(4);
// };
// function getName() {
//    console.log(5);
// }
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName()


