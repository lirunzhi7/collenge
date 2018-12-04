var lis = document.querySelectorAll('ul li')
// for (var i = 0; i < lis.length; i++) {
//     var cur = lis[i]
//     if (i === 0) {
//         cur.style.background = 'yellow'
//     } else if(i === 1) {
//         cur.style.background = 'pink'
//     } else if(i === 2) {
//         cur.style.background = 'brown'
//     } else if(i === 3) {
//         cur.style.background = 'green'
//     } else if(i === 4) {
//         cur.style.background = 'red'
//     }
// }
function fn(n) {
    n++
    alert('我是第' + n + '个li')
}
var i = 0;
while (i < lis.length) {
    var cur = lis[i]
    switch(i) {
        case 0:
            cur.style.background = 'yellow'
            lis[i].onclick = function() {fn(0)}
            break;
        case 1:
            cur.style.background = 'brown'
            break;
        case 2:
            cur.style.background = 'pink'
            break;
        case 3:
            cur.style.background = 'green'
            break;
        case 4:
            cur.style.background = 'red'
            break
    }
    i++
}

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i
    lis[i].onclick = function() {
        // this 代表的是点击的li
        fn(this.index)
    }
}