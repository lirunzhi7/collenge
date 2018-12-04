// 解释为什么i = 4

// 获取最外面的div
var container = document.getElementById('container')
// 获取所有的li
var lis = container.getElementsByTagName('li')
// 获取container里面的div
var divs = container.getElementsByTagName('div')
function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}
for (var i = 0; i < lis.length; i++) {
    // lis[i].onclick = change(i) // 这个表示函数执行
    lis[i].onclick = function () {
        // change(i) // i 始终都是4
        console.log('B')
        console.log(i) 
        // 4 这个i不是私有变量
        // 会往上一级寻找i 上一级就是全局作用域了
        // 经过循环全局作用域下的i已经变成4了
    }
}
console.log('A')
console.log(i) // 4
// 先执行循环 循环执行完成后i=4 => 执行26 27行 
// => 等待点击，点击的时候执行fn