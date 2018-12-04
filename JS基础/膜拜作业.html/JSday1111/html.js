
var p1 = [1,2,3,4,5,6,7,8,9]
var p2 = ''
for (var i = 0; i < 4; i++) {
    var len = p1.length
    var cur = Math.floor(Math.random()*len)
    var qq = p1[cur]
    if(p2.indexOf(p1[cur]) === -1){
        p2 += qq 
       
    }
    else{
        i--
    }

}
console.log(p2)
// var body = document.body
// var divs = document.createElement('div')
// var p = body.appendChild(divs)
// divs.innerText= p2