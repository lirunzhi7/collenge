//删除重复项
var p = [1,2,3,4,5,6,1,2,3,4,5,6]
var obj = {}
for (var i = 0; i < p.length; i++) {
    var cur = p[i]
    if(obj[cur]===undefined){
        obj[cur]=true
    }
    else{
        p.splice(i,1)
        i--
    }
}
console.log(p)

var p = [1,2,3,4,5,6,1,2,3,4,5,6]
for (var i = 0; i < p.length; i++) {
    var cur = p[i]
    for (var k = i+1; k < p.length; k++) {
        if(cur===p[k]){
            p.splice(k,1)
            k--
        }
    }
}
console.log(p)



//冒泡方法
var p = [1,3,5,37,10,70,50,40]
for (var k = 0; k < p.length; k++) {
    for (var i = 0; i < p.length-1-k; i++) {
        var cur = p[i]
        if(cur>p[i+1]){
            [p[i],p[i+1]]=[p[i+1],p[i]]
        }
    }
}
console.log(p)


///选项卡

// var obox=document.getElementById('box')
// var lis =obox.getElementsByTagName('li')
// var divs =obox.getElementsByTagName('div')
var lis = document.querySelectorAll('#box li')
var divs = document.querySelectorAll('#box div')

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