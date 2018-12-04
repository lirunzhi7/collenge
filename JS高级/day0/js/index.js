// var time = window.setTimeout(function(){
//     alert('hello world time')
// }, 1000)
// var time2 = window.setTimeout(function(){
//     alert('hello world time2')
// }, 1000)
// window.clearTimeout(time)
var num = 0
var time = window.setInterval(function(){
    num++
    console.log('hello')
    if(num === 2) clearInterval(time)
}, 1000)

// setTimeout(function(){ // time执行两次后被清除
//     clearInterval(time)
// },2000)
