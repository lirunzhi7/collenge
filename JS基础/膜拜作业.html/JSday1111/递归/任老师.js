
// function fn(n) {
//     if(n===1) return 0
//     if(n%3===0 && n%5===0) return n+fn(n-1)
//     return fn(n-1)
// }
// console.log(fn(100))

// var n = 100
// var cur = 0
// for (var i = 1; i < n; i++) {
//     if(i%3===0 && i%5===0){
//         cur+=i
//     }
// }
// console.log(cur)

// var pp = document.querySelector('div')

// pp.onmouseenter=function(){
//     console.log('hello')
// }
// pp.onmouseleave=function(){
//     console.log('word')
// }

//鼠标滑过后的颜色背景的变化
var lis = document.querySelectorAll('ul li')
var p = ['red','yellow']

for (var i = 0; i < lis.length; i++) {
    if(i%2===0){
        lis[i].style.background=p[0]
        lis[i].ppp=p[0]
        // lis[i].ppp=i
    }
    else{
        lis[i].style.background=p[1]
        lis[i].ppp=p[1]
        // lis[i].ppp=i
    }
}

for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseenter=function(){
        this.style.background='pink'
    }
    lis[i].onmouseleave=function(){
        this.style.background=this.ppp
        // if(this.ppp%2===0){
        //     this.style.background=p[0] 
        // }
        // else{
        //     this.style.background=p[1]
        // }
    }
}



var p = 'drdadrhwu'
var obj = {}
for (var i = 0; i < p.length; i++) {
    var cur = p[i]
    if(obj[cur]===undefined){
        obj[cur]=1
    }
    else{
        obj[cur]=obj[cur]+1
    }
}
console.log(obj)

var count = 0
for (var n in obj) {
    if(obj[n]>count){0
        count=obj[n]
       var tt=n
    }
}
console.log(count,tt)



