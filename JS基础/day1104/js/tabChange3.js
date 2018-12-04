var container = document.getElementById('container')
var lis = container.getElementsByTagName('li')
var divs = container.getElementsByTagName('div')
function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}
// 自定义属性实现
for (var i = 0; i < lis.length; i++) {
    // lis[0].index = 0;
    // lis[1].index = 1;
    // lis[2].index = 2;
    lis[i].index = i
    lis[i].onclick = function () {
        // this指的就是点击的DOM 也就是点击的li
        console.log(this.index); // 0 1 2 3
        change(this.index)
    }
}
// 闭包方式
// for (var i = 0; i < lis.length; i++) {
//     ~(function(i) {
//         lis[i].onclick = function () {
//             change(i)
//         }
//     })(i)
// }
// let 块级作用域
// for (let i = 0; i < lis.length; i++) {
//     lis[i].onclick = function () {
//         change(i)
//     }
// }