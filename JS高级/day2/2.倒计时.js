
// var a = setInterval(function(){
//     console.log(99)
// },1000)
// console.log(a)//返回值代表当前页面中第几个定时器
// var b = setInterval(function(){
//     console.log(100)
// },1000)
// console.log(b)
// clearInterval(a)

//倒计时
var box = document.getElementById('box')
function fn(){
    var targetTime = new Date('2018/11/23 13:00:00').getTime()
    var curTime = new Date().getTime()//Date.now()
    var difTime = targetTime-curTime
    if(difTime<=0){
        clearInterval(time)
        return
    }
    var hour = Math.floor(difTime/(60*60*1000))
    var min =  Math.floor((difTime-hour*60*60*1000)/(60*1000))
    var second =  Math.floor((difTime-hour*60*60*1000-min*60*1000)/1000)
    box.innerHTML='距离吃饭还剩'+'<br/>'+ f(hour) +':'+ f(min) +':'+ f(second)
}
fn()
var time = setInterval(fn,1000)
function f(n){
   return n>=10 ? n : '0'+n
}
