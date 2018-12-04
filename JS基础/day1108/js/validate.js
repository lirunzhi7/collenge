function validateFn() {
    var str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    var result = ''
    var len = str.length
    while(result.length < 4) {
        var index = Math.floor(Math.random()*len)
        var cur = str[index]
        if (result.indexOf(cur) === -1) result += cur
    }
    return result
}
function colorRan() {
    var str = '1234567890ABCDEF'
    var result = '#'
    var len = str.length
    while(result.length < 7) {
        var index = Math.floor(Math.random()*len)
        result += str[index]
    }
    return result
}
var div = document.createElement('div') // 创建div
div.style.fontSize = '30px'
div.style.textAlign = 'center'
div.style.marginTop = '100px'
var body = document.body // 获取body
body.appendChild(div) // 将div放入body
var butt = document.createElement('button') // 创建button
butt.innerText = '点击切换验证码' // 给button一些内容
body.appendChild(butt) // 将button放入body
butt.onclick = function() { // 给botton绑定点击事件 
    // 点击的时候改变div里面内容 内容就是验证法方法返回的四位验证码
    div.innerText = validateFn()
    div.style.background = colorRan() // 随便变化背景色
}
div.innerText = validateFn() // 给div一个默认的验证码 一开始没有点击
div.style.background = colorRan()
