var zhf = document.getElementById('contai')
var lis = zhf.getElementsByTagName('li')
var divs = zhf.getElementsByTagName('div')

function fn(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className=''
        divs[i].className=''
    }
    lis[n].className='active'
    divs[n].className='active'
}
for (var i = 0; i < lis.length; i++) {
    lis[i].aaa= i
    lis[i].onclick=function(){
        fn(this.aaa)
    }
}







// var zhf = document.getElementById('contai')
// var lis = zhf.getElementsByClassName('li')
// var divs = zhf.getElementsByClassName('div')

// lis[0].onclick=function(){
//     fn(0)
// }
// lis[1].onclick=function(){
//     fn(1)
// }
// lis[2].onclick=function(){
//     fn(2)
// }
// lis[3].onclick=function(){
//     fn(3)
// }
// function fn(n){
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].className=''
//         divs[i].className=''
//     }
//     lis[n].className='active'
//     divs[n].className='active'
// }