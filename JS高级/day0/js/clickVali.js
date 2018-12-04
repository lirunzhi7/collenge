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
var div = document.createElement('div')
var body = document.body
body.appendChild(div)
var buttArr = []
for (var i = 1; i < 3; i++) {
    var butt = document.createElement('button')
    buttArr.push(butt) // 将两个button放入数组
    body.appendChild(butt)
}
// buttArr = [button, button]
buttArr[0].innerHTML = '开始'
buttArr[1].innerHTML = '结束'
var time = null
buttArr[0].onclick = function() {
    clearInterval(time)
    time = setInterval(function(){
        div.innerHTML = vail()
    }, 100)
}
buttArr[1].onclick = function() {
    clearInterval(time)
}
// 节流与防抖






