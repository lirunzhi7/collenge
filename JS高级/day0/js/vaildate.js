// 0-9 4位数 一秒钟变一次 10秒钟之后停止变动，
// 这四位随机数是要在页面显示的
// 也就是最终的中奖工号

function vail(){
    var str = '1234567890'
    var result = ''
    var len = str.length
    while(result.length < 4){
        var index = Math.floor(Math.random()*len)
        result += str[index]
    }
    return result
}
var myDiv = document.createElement('div')
document.body.appendChild(myDiv)
var num = 0 // 执行多少次
var time = setInterval(function(){
    num++
    myDiv.innerHTML = vail()
    if(num === (1000 / 50) * 10) clearInterval(time)
}, 50)
