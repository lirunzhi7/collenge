var lis = document.querySelectorAll('#container li')
var divs = document.querySelectorAll('#container div')
function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i
    lis[i].onclick = function() {
        // 绑定事件里面的this，指的就是绑定的对象
        change(this.index)
    }
}
// i = 4