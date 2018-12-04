


// <!-- 
//     try{
//         console.log(100)
//     }catch(e){
//         console.log(99)
//     } -->
    // try{
    //     console.log(a)//如果try语句中有语句报错，则会执行catch中的代码
    // }catch(e){//e输出报错语句
    //     console.log(e)
    //     console.log(99)
    // }

//DOM映射机制：
var obox = document.getElementById('box')
var lis = obox.getElementsByTagName('li')
var bott = document.querySelector('button')
var liArr = Array.prototype.slice.call(lis)

bott.onclick=function(){
    for (var i = 0; i < liArr.length; i++) {
        lis[i].style.background ='yellow'
    }
    liArr.sort(function(a,b){
        return a.innerText - b.innerText
    })
    console.log(liArr)
    for (var i = 0; i < liArr.length; i++) {
        obox.appendChild(liArr[i])
    }
}




//检测不出来问题出来在了那里！！！
// var box = document.getElementById('box')
// var lis = box.getElementsByTagName('li')
// var butt = document.getElementsByTagName('button')
// var untis = (function(){
//     function aryLike(n){
//         var ary = []
//         try{
//             ary = Array.prototype.slice.call(n)
//         }catch(e){
//             for (var i = 0; i < n.length; i++) {
//                 var cur = n[i]
//                 ary.push(cur)
//             }
//         }
//         return ary
//     }
//     return {aryLike:aryLike}
// })()

// var arylist = untis.aryLike(lis)
// console.log(arylist)
// butt.onclick = function(){
//     arylist.sort(function(a,b){
//         return a.innerText - b.innerText
//     })
// }







//JSON格式对象（在IE7以及以下，是不存在json这个对象的）

// var obj = {
//     "name":"zhuceng",
//     "age":18
// };

// //JSON格式字符串
// var str ='{ "name":"zhuceng",  "age":18}'

// //JSON.stringify():把json格式的对象或者普通的对象转换成json格式字符串

// //JSON.parse :将json格式的字符串转成json格式的对象


// //eval ：在ie7以下，解决stringify、parse兼容问题

// console.log(eval('('+str+')'))
