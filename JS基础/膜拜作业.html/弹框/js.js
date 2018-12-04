var lis = document.querySelectorAll('ul li')[0]
var lis2 =  document.querySelectorAll('ul li')[1]
var lis3 =  document.querySelectorAll('ul li')[2]
var obox = document.querySelector('div')
var otext = obox.querySelector('span')
var oimg = document.querySelector('img')
lis.onclick=function(){
    info('成%%%%功',1)
}
lis2.onclick=function(){
    info('失￥￥￥￥败',2)
}
lis3.onclick=function(){
    info('失败是成功之母',3)
}
function info(m,n){
    obox.style.display='block'
    otext.innerText= m
    
    // oimg.style.display='block'
    // switch(n){
    //     case 1:
    //     oimg.src='cuo.png'
    //     break;
    //     case 2:
    //     oimg.src='dui.png'
    //     break;
    //     case 3:
    //     oimg.src=''
    //     oimg.style.display='none'
    //     break;
        
    // }
}