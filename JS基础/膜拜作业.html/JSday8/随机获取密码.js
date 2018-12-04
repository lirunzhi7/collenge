
 
function fn(){
    var  p = '1234567890abcdefjhigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQISTUVWXYZ'
    var obj = ''
    for (var i = 0; i < 4; i++) {
        var ven = Math.floor(Math.random()*62)
        src=p[ven]
        if(obj.indexOf(src)===-1){
            obj += src
        }
        else{
            i--
        }
    }
    return obj
}

console.log(fn())
function dn(){
    var q = '1234567890ABCDEF'
    var obj = '#'
    for (var i = 0; i <6; i++) {
        pen=Math.floor(Math.random()*15)
        cur=q[pen]
        if(obj.indexOf(cur)===-1){
        obj+=cur
        }
        else{
            i--
        }
    }
    return obj
}
console.log(dn())


var div = document.createElement('div')
var body = document.body
body.appendChild(div)
var butt = document.createElement('button')
butt.innerText='点我点我点我'
body.appendChild(butt)
butt.onclick=function(){
    div.innerText=fn()
    div.style.background=dn()
}
div.innerText=fn()
div.style.background=dn()















