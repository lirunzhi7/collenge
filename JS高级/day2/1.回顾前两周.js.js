// var d=e=f={a:2}
// f.a=100
// console.log(d)

// if(![]==[]){
//     console.log(1)
// }
// if([] !== []){
//     console.log(1)
// }   

// var obj = {a:1}
// if(obj.b){//(undefind转换为布尔值是false    如果只有一个值，会转布尔值)
//     console.log(100)
// }


// var o = {a:1,b:2}
// console.log(o.a)
// console.log(o[a])//不是变量需要用到字符串不然会报错

// for(var k in o){
//     console.log(o[k])
// }


// var obj = {a:0,名字:'希望',b:20,10:100,9:99}
// for(var k in obj){
//     console.log(obj[k])
// }//如果对象的属性名是数字，则会先输出，并且按照数字的大小顺序

//字符串有索引和length
// var p = 'drdadrhwu'
// var obj = {}
// for (var i = 0; i < p.length; i++) {
//     var cur = p[i]
//     if(obj[cur]===undefined){
//         obj[cur]=1
//     }
//     else{
//         obj[cur]=obj[cur]+1
//     }
// }
// console.log(obj)
// var obj ={d: 3, r: 2, a: 1, h: 1, w: 1, u:1}
// var count = 0
// for (var n in obj) {
//     if(obj[n]>count){
//         count=obj[n]
//        var tt=n
//     }
// }
// console.log(count,tt)

// if(1=='1'){
//     console.log(1)
//     if(3=='3'){
//         console.log(2)
//     }else{
//         console.log(3)
//     }
// }else{
//     console.log(4)
// }

// 1=='1' ? (console.log(1),(3=='3'? console.log(2) : console.log(3))):console.log(4)


// for (var i = 0; i <10; i++) {
//     if(i>4){
//         break
//     }
//     console.log(i)
// }

//节点这块有点小问题
//四种节点：节点是一个对象数据类型
//DOM树是由节点组成    先形成DOM树，在形成css树,最后两个合并成render
//在不兼容的情况下用到以下方法（特别注意：哥哥节点就是指的上一个节点，哥哥元素节点会直接找到上一个哥哥元素节点，会跳过节点）
// var obox = document.getElementById('box')
// // console.log(obox.parentNode.childNodes);
// // console.log(obox.previousElementSibling);
// function fn(m){
//     var n = m.previousSibling;
//     while(n){
//     if(n.nodeType===1){ 
//         return n
//     }else{
//         n=n.previousSibling;
//         }
//     }
// }
// console.log(fn(obox))

// box.classList.add('ppp')
// box.classList.replace('ppp','hhh')
// box.classList.remove('hhh')

//函数的定义
//1.开辟一个新的空间地址：堆内存2.把函数体中的代码当做字符串存储到这个堆内存中3.把空间地址赋值给函数名
//函数的执行
//1.形成私有的作用域（占内存）2.形成赋值3.变量提升4.代码从上到下执行5.作用域是否销毁


// function fn(a,b){
//     console.log(arguments)//类数组  
//     a=9
//     //在非严格模式下，形参和arguments有映射关系。在严格模式下就没有（use strict)
// }
// fn(1,2,3,4,5,6)
 


// //函数中 return 终止函数整体的运行 
// function f(){
//     for(var i = 0;i<10;i++){
//         if(i>5){
//             return 1
//         }
//         console.log(100)
//     }
//     console.log(101)
// }
// f()
// console.log(f())

function fn(){
    var total =  0
    for (var i = 0; i < arguments.length; i++) {
        var cur = +arguments[i]
        isNaN(cur) ? null : total += cur
    }
    return total
}
console.log(fn(1,2,'11',true,[12,23],'a11'))

// var p = [1,2,3,4,10]
// // p.forEach(function(m){
// //     console.log(m)
// // })
// var qq = p.map(function(m){
//     console.log(m)
//     return 20
// })
// console.log(qq)

//利用forEach去重
// var arr = [1,1,2,2,3,3]
// function fn(n){
//     var result = []
//     var pp = n.slice()
//     pp.forEach(function(item){
//     if(result.indexOf(item) === -1){
//         result.push(item)
//     }
// })
//     return result
// }
// console.log(fn(arr))

// var arr = '11223333'
// var pp = arr.split('')
// pp.forEach(function(item){
//     console.log(item)
// })


//尝试定时器

// setTimeout(function(){alert('好好学习')},1000)
// var num = 0
// var time = setInterval(function(){
//     num++
//     console.log('好好学习')
//     if(num===6){
//         clearInterval(time)
//         }
// },1000)
// var num = 0
// var time = window.setInterval(function(){
//     console.log('hellow')
//     num++
//     if(num===4){
//         clearInterval(time)
//     }
// },1000)

//数组的去重方法
// var arr = [12,3,45,13,7,3,7,12]
// var obj = {}
// // 方法一
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i]
//     if(obj[cur]===undefined){
//         obj[cur]=true
//     }
//     else{
//         // arr.splice(i,1)
//         arr[i]=arr[arr.length-1]
//         arr.length--
//         i--
//     }
// }
// console.log(arr)

// var arr = [12,3,45,13,7,3,7,12]
// var obj = {}
// //方法二
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i]
//     obj[cur]= arr[i]
// }
// console.log(obj)
// var bbj = []
// for(k in obj){
//    bbj.push(obj[k])
// }
// console.log(bbj)

// var arr = [12,3,45,13,7,3,7,12]
// var newarr = []
// //方法三
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i]
//     if(newarr.indexOf(cur)===-1){
//         newarr.push(cur)
//     }else{
//         arr[i]=arr[arr.length-1]
//         arr.length--
//         i--
//     }
// }
// console.log(arr)

///Date
// var time = new Date
// console.log(time.getFullYear())//获取年份
// console.log(time.getMonth())//获取月份【0-11】
// console.log(time.getDate())//获取日【1-31】
// console.log(time.getDay())//获取星期【0-6】
// console.log(time.getHours())//获取小时【0-23】
// console.log(time.getMinutes())//获分钟【0-59】
// console.log(time.getSeconds())//获取秒【0-59】
// console.log(time.getMilliseconds())//获取毫秒0-999
// console.log(time.getTime())//当前最新时间距离1970-1-1上午八点的毫秒差
// console.log(Date.now())//也是毫秒差

