var container = document.getElementById('container')
var divs = container.getElementsByTagName('div')
var lis = container.getElementsByTagName('li')

function change(n) {
    // 这个n就是我们点击的那个li在lis中的索引
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
        divs[i].className = ''
    }
    lis[n].className = 'active'
    divs[n].className = 'active'
}
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i
    // lis[0].index = 0
    lis[i].onclick = function () {
        // this指向的就是lis[i]
        // 也就是点击的li
        change(this.index) // 0 1 2 3
    }
}