
// var pen=document.querySelectorAll('ul li')

// for (var i = 0; i < pen.length; i++) {
//     if(i==0){
//         pen[0].style.background='yellow'
//     }
//     else if(i==1){
//         pen[1].style.background='green'
//     }
//     else if(i==2){
//         pen[2].style.background='red'
//     }
//     else if(i==3){
//         pen[3].style.background='blue'
//     }
//     else{
//         pen[i].style.background='pink'
//     }
// }
// var pen=document.querySelectorAll('ul li')
// var type = ['yellow','green','red','blue','pink']
//  for (var i = 0; i < pen.length; i++) {
//     pen[i].style.background=type[i]
//  }

// var i = 0
// while(i < pen.length){
//     switch(i){
//         case 0 : pen[0].style.background='yellow'
//         break
//     }
//     switch(i){
//         case 1 : pen[1].style.background='green'
//         break
//     }
//     switch(i){
//         case 2 : pen[2].style.background='red'
//         break
//     }
//     switch(i){
//         case 3 : pen[3].style.background='blue'
//         break
//     }
//     switch(i){
//         case 4 : pen[4].style.background='pink'
//         break
//     }
//     i++
// }
// for (var i = 0; i < pen.length; i++) {
//     pen[0].onclick=function(){
//         alert('我是第一个li')
//     }
//     pen[1].onclick=function(){
//         alert('我是第2个li')
//     }
//     pen[2].onclick=function(){
//         alert('我是第3个li')
//     }
//     pen[3].onclick=function(){
//         alert('我是第4个li')
//     }
//     pen[4].onclick=function(){
//         alert('我是第5个li')
//     }
// }
// function fn(n){ 
//     ++n
//     alert('我是第'+ n + '个li')
// }
// for (var i = 0; i < pen.length; i++) {
//     pen[i].ppp=i
//     pen[i].onclick=function(){
//         fn(this.ppp)
//     }
// }



// function ger2(sele){
//     var result = []
//     var dom = document.querySelector(sele)
//     eom = dom.childNodes
//     for (var i = 0; i < eom.length; i++) {
//         if(eom[i].nodeType ===1){
//             result.unshift(eom[i])
//         }
//     }
//     return result
// }
// console.log(ger2('#hey'))




// var arr = [1,[2,[3,4]],5]
// var obj = []
// for (var i = 0; i < arr.length;) {
//     cur = arr.shift()
//     if(typeof cur==='number'){
//         obj.push(cur)
//     }
//     else{
//         arr=cur.concat(arr)
//     }
// }
// console.log(obj)