// element 元素
// get 获得
var hey = document.getElementById('hey')
// hey 是一个DOM对象
// console.dir(hey)

hey.style.background = 'pink'

// hi+hello => hihello
hey.className = hey.className + 'hello'

// hey.innerHTML = '<a>baidu</a>' //可以识别a标签
// hey.innerText = '<a>baidu</a>' 
// 不能识别a标签 会将<a>当做普通文本渲染



var p = document.getElementsByTagName('p')
// console.log(p) // [第一个p标签的DOM对象, 第二个DOM对象]
// p[1].style.fontSize
var aap = hey.getElementsByTagName('p')
// console.log(aap) // [p] 类数组 
aap[0].style.fontSize = '30px'


var news = document.getElementsByClassName('news')
// 循环
// 隔行变色 改变li.stye.background = 
// for (var i = 0; i < news.length; i += 2) {
//     news[i].style.background = 'yellow'
// }

for (var i = 0; i < news.length; i++) {
    if (i % 2){ // i%2 要么是0要么是1
        news[i].style.background = 'yellow'
    } else {
        news[i].style.background = 'green'
    }
}

var color = ['yellow', 'green']
for (var i = 0; i < news.length; i++) {
    news[i].style.background = color[i % 2]
}