var obox = document.getElementById('box')
var lis = obox.getElementsByTagName('li')
var divs =obox.getElementsByTagName('div')

for (var i = 0; i < lis.length; i++) {
    lis[i].ppp=i
    lis[i].onclick=function(){
    fn(this.ppp)
    }
}
function fn(n){
    for (var i = 0; i < lis.length; i++) {
        lis[i].className=''
        divs[i].className=''
    }
    lis[n].className='activ'
    divs[n].className='activ'
}