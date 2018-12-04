// var p = document.getElementById('box')
// var lis = p.getElementsByTagName('li')
// var divs = p.getElementsByTagName('div')

// for (var i = 0; i < lis.length; i++) {
//     lis[i].ppp=i
//     lis[i].onclick=function(){
//         fn(this.ppp)
//     }
// }
// function fn(n){
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].className=''
//         divs[i].className=''
//     }
//     lis[n].className='active'
//     divs[n].className='active'
// }




// function fn(){
//     var cur = 0
//     for (var i = 0; i <=100; i++) {
//         if(i%3===0 && i%5===0){
//             cur+=i
//         }
//     }
//     return cur
// }
// console.log(fn())



//递归
// function fn1(m){
//     if(m%3===0 && m%5===0 && m>0) {return m+fn1(m-1)}
//     else if(m>0){
//         return fn1(m-1)
//     } 
//     else {
//         return 0
//     }

// }
// console.log(fn1(100))
// function fn1(m){
//     if(m===1) return false
//     if(m%3===0 && m%5===0) return m+fn1(m-1)
//     return fn1(m-1)
// }
// console.log(fn1(100))


// var arr = [1,1,2,2,3,3]
// function fn(arr){
//     var result = []
//     var pp = arr.slice()
//     pp.forEach(function(item){
//     if(result.indexOf(item) === -1){
//         result.push(item)
//     }
// }) 
//     return result
// }
// console.log(fn(arr))

// function fn(n){
//     if(n===1) return 1
//     if(n%2===0) return fn(n-1)
//     return n+fn(n-2)
// }
// // fn(9)

// console.log(fn(10))

// var p = ''
// for (var i = 97; i <= 122; i++) {
//     p+=String.fromCharCode(i)
// }
// console.log(p)


//有问题
// var str1 = '1887-8-9 19:30:21'
// var str2 = '1887/18/9 19:30:21'
// function fn(m){
//     var cur = ''
//     var pen = m.includes('-') ? '-' : '/'
//     var p = m.split(' ')
//     var p1 = p[0].split('pen')
//     var p2 = p[1].split(':')
//     console.log(p1,p2)
//     cur = cur+ p1[0]+'年'+p1[1]+'月'+p1[2]+'日'+p2[0]+'时'+p2[1]+'分'+p2[2]+'秒'
//     return cur
// }
// console.log(fn(str1))

// var str = 'www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu'
// function fn(n){
//     var cun = n.split('?')
//     var str2 =cun[1].split('&')
//     console.log(str2)
//     var obj = {}
//     for (var i = 0; i < str2.length; i++) {
//        var sos = str2[i].split('=')
//        console.log(sos)
//        obj[sos[0]]=sos[1]
//     }
//     return obj
// }
// console.log(fn(str))


// var p = 'zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJKLQWERTYUIOP'
// function fn(n){
//     var obj = ''
//     for (var i = 0; i < 4; i++) {
//         var cur = Math.floor(Math.random()*62)
//         if(obj.indexOf(n[cur]) === -1){
//             obj+=n[cur]
//         }
//         else{
//             i--
//         }
//     }
//     return obj
// }
// console.log(fn(p))

function fn(){
    var obj = 0
    for (var i = 0; i < arguments.length; i++) {
        var cur =+arguments[i]
        isNaN(cur) ? null : obj+=cur
    }
    return obj
}
console.log(fn(1,2,3,4,5,6,7,5,22,30))

var divs = document.createElement('div')
var body = document.body
var butt = document.createElement('button')
var end1 = body.appendChild(divs)
var end2 = body.appendChild(butt)
divs.innerText=fn(1,2,3,4,5,6,7,5,22,30)
divs.style.background=fn1('0123456789ABCDEF')
butt.innerText='点我点我点我'
butt.onclick=function (){
    // divs.innerText=+(divs.innerText)+1
    // divs.innerText=fn(1,2,3,4,5,6,7,5,22,30)
    divs.appendChild(divs.cloneNode(true))
    divs.style.background=fn1('0123456789ABCDEF')
}

function fn1() {
    var num = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        var ppe = Math.floor(Math.random()*15)
        var tur = num[ppe]
        color+=tur
    }
    return color
}
console.log(fn1('0123456789ABCDEF'))

