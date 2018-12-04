
var lis = document.querySelectorAll('ul li')[0]
var lis1 = document.querySelectorAll('ul li')[1]
var divs = document.querySelector('div')
var pans = document.querySelector('span')
var oimg = document.querySelector('img')

lis.onclick=function(){
    fn('窗外的麻雀',1)
}
lis1.onclick=function(){
    fn('在电线杆上多嘴',2)
}

function fn(m,n){
    divs.style.display='block'
    pans.innerText=m
    // oimg.style.display='block'
    switch(n){
        case 1:
        oimg.src='picture/cuo.png'
        break;
        case 2:
        oimg.src='picture/dui.png'
        // oimg.style.display='none'
        break;
    }
}



// var obj = ''
// function fn(){
//     for (var i = 0; i <4; i++) {
//         var cur = Math.floor(Math.random()*10)
//         var num = arguments[cur]
//         if(obj.indexOf(num)===-1){
//             obj+=num
//         }
//         else{
//             i--
//         }
//     }
//     return obj
// }
// console.log(fn(0,1,2,3,4,5,6,7,8,9))
