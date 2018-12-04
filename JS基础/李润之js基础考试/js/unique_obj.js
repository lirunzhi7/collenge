var p = [1,1,1,2,2,2,3,3,3,4,4]
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