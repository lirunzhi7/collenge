//可枚举和不可枚举
//可枚举属性：当前实例的私有属性和自定义类的公用属性都是可枚举属性
//不可枚举属性：当前内置类上内置的属性都是不可枚举属性；
// function hasPublicProperty(obj,attr) {
//         if(obj.hasOwnlicProperty(attr) || 'attr' in obj){
//             return false
//         }else{
//             return true
//         }

// }
// console.log(hasPublicProperty(f,"getX"))

// var fn = function(){
//     this.a=99
// }
// fn.prototype.gety = function(){}
// var ff = new fn
// fn.prototype={b:100}
// var f = new fn
// console.log(f.b)

// function Fn() {
//     var a = 1
//     this.a = a
// }
// Fn.prototype.say = function () {
//     this.a = 2
// }
// var pp = new Fn
// Fn.prototype = pp;
// var f1 = new Fn;
// f1.__proto__.b = function () {
//     this.a = 3
// };
// console.log(f1.a) = 1
// console.log(f1.prototype) //undefined
// console.log(f1.b)  //函数function(){this.a=3}
// console.log(f1.hasOwnProperty('b'))//false
// console.log('b' in f1 )        // true  //b只要是在f1的原型链上，返回都是true
// console.log(f1.constructor == Fn) //false 



// function fn1(m,n){
//     console.log(this)
//     console.log(m,n)
// }

// var f = fn1.bind()
// f(4,5,6)


// //关于call的练习
// function fn1(m,n){
//     console.log(this)
//     console.log(m+'9',n+'9')
// }
// function fn2(m,n){
//     console.log(this,'hahah')
//     console.log(m+'0',n+'0')
// }
// fn1.call.call(fn2,1,2)



//排序
// var ary = [12,7,8,101,99]

// for (var i = 0; i < ary.length; i++) {
//     if(ary[i]>ary[i+1]){
//         // var temp = ary[i];
//         //     ary[i] = ary[i+1];
//         //     ary[i+1] = temp;
//         var p = ary[i]
//         ary[i] = ary[i+1] 
//         ary[i+1]= p
//     }
// }
// console.log(ary)

// console.log(Math.max.apply(null,ary))
// console.log(...ary)
// console.log(Math.max(...ary))

// //展开运算符

// var a = [1,2,3]
// var b = [4,5,6]
// var p = [...a,...b]
// console.log(p)//[1,2,3,4,5,6]
// var  obj = {name:"珠峰"};
// var  abc = {age:9};
// //obj.concat(abc)
// var f = {...obj,...abc};
// console.log(f);
// var a = [10]
// var b = [20]
// var c = [...a,...b]
// console.log(c)



//类数组转化成数组
// function sun(){
//     var a = Array.prototype.slice.call(arguments,2,4)
//     console.log(a)
// }
// sun(1,2,3,6,78,9)

// // var cur = [1,2,3,4,5,6]
// cur.slice()
// // cur.__proto__.slice(2)
// // console.log(cur.slice(2))




//求和取平均(删除最大和最小后取平均)
// function fn(){
//     var a = Array.prototype.slice.call(arguments)
//     console.log(a)
//     a.sort(function(a,b){return a-b})
//     console.log(a)
//     a.pop()
//     console.log(a)
//     a.shift()
//     console.log(a)
//     var sum =+(eval(a.join('+'))/a.length).toFixed(2)
//      //eval字符串转化成真正的表达式即是字符串的合需要转成数字
//     // return sum
// }
// console.log(fn(99,100,80,81,82,83))







