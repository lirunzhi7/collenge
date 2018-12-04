// 获取最外面的div
var container = document.getElementById('container')
// 获取所有的li
var lis = container.getElementsByTagName('li')
// 获取container里面的div
var divs = container.getElementsByTagName('div')

// 给每个li绑定点击事件
lis[0].onclick = function () {
    change(0)
}
lis[1].onclick = function () {
    change(1)
}
lis[2].onclick = function () {
    change(2)
}
lis[3].onclick = function () {
    change(3)
}
function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}