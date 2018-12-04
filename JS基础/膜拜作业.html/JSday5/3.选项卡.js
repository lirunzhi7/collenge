// var container = document.getElementById('contai')
// var lis = container.getElementsByTagName('li')
// var divs = container.getElementsByTagName('div')

// lis[0].onclick=function(){
//     change(0)
// }
// lis[1].onclick=function(){
//     change(1)
// }
// lis[2].onclick=function(){
//     change(2)
// }
// lis[3].onclick=function(){
//     change(3)
// }
// function change(n){
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].className=''
//         divs[i].className=''
//     }
//     lis[n].className='active'
//     divs[n].className='active'
// }




// var container = document.getElementById('contai')
// var lis = container.getElementsByTagName('li')
// var divs = container.getElementsByTagName('div')

// function change(n){
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].className=''
//         divs[i].className=''
//     }
//     lis[n].className='active'
//     divs[n].className='active'
// }
// for(var i = 0; i<lis.length; i++){
//     lis[i].ppp=i
//     lis[i].onclick=function(){
//         change(this.ppp)
//     }
// }




var container = document.getElementById('contai')
var lis = container.getElementsByTagName('li')
var divs = container.getElementsByTagName('div')
for (var i = 0; i < lis.length; i++) {
    lis[i].opop=i
    lis[i].onclick=function(){
        fn(this.opop)
    }
}
function fn(n){
    for (var i = 0; i < lis.length; i++) {
        lis[i].className=''
        divs[i].className=''
    }
    lis[n].className='active'
    divs[n].className='active'
}