// var time1 = window.setTimeout(function(){alert('daydayup')},1000)
// var time2 = window.setTimeout(function(){alert('goodgoodstudy')},1000)
// window.clearTimeout(time1)
// console.log(time1,time2)

// var num = 0
// var time = window.setInterval(function(){
//     num++
//     console.log('hellow')
//     if(num===4){
//         clearInterval(time)
//     }
// },1000)




function fn(){
    var obj = ''
    var pd = '0123456789'
    for (var i = 0; i <4; i++) {
        var cur = Math.floor(Math.random()*10)
        var num = pd[cur]
        if(obj.indexOf(num)===-1){
            obj+=num
        }
        else{
            i--
        }
    }
    return obj
}
// var num = 0
// var time = window.setInterval(function(){
//     num++
//     divs.innerText= fn()
//     if(num===10){
//         clearInterval(time)
//     }
// },1000)
var body = document.body
var divs = document.createElement('div')
var bd = body.appendChild(divs)
divs.innerText= fn()
var butt1 = document.createElement('button')
var butt2 = document.createElement('button')
var bun = body.appendChild(butt1)
var bun2 = body.appendChild(butt2)
butt1.innerText='开始按钮'
butt2.innerText='结束按钮'
var time = null //节流与防抖
butt1.onclick=function(){
    clearInterval(time)//节流与防抖
    time = window.setInterval(function(){
    divs.innerText= fn()      
},100)
}
butt2.onclick=function(){
        clearInterval(time)
}






//浏览器空闲的时候执行
// console.log('1111')
// requestIdleCallback(function(){
//     console.log('定时器重点要看')
//     alert('定时器重点')
// })
// console.log('2222')
// console.log('3333')