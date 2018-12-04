
// console.log(heyId)
// console.dir(heyId)
// heyId.className = 'my_div'
// heyId.style.background = 'yellow'
var heyId = document.getElementById('hey')
var ps = document.getElementsByTagName('p')
// [p, p]
var heyP = heyId.getElementsByTagName('p')
// [p]
// heyP.style.background = 'yellow' // 会报错
heyP[0].style.background = 'yellow'

var his = document.getElementsByClassName('hi')
// [hi,hi,hi,hi]
var heyHi = heyId.getElementsByClassName('hi')
// [hi]
heyHi[0].style.fontSize = '30px'



// 私有属性
// heyId 是一个div 是一个DOM对象
heyId.aaa = 'bbb'
// console.dir(heyId.aaa); // 'bbb'
// 给heyId这个HTML绑定一个点击事件
// 当点击这个HTML的时候执行绑定的函数
heyId.onclick = function () {
    // this 当前函数里表示的是heyId
    // 当给一个DOM绑定事件的时候，
    // 这个事件里面的this指的就是这个DOM
    console.log(this);
    alert('A')
}


























