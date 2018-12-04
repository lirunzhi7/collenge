var p = [1,1,1,2,2,2,3,3,3,4,4,10,10,8,8,8]

for (var i = 0; i < p.length; i++) {
    var cur =p[i]
    for (var k = i+1; k < p.length; k++) {
        if(cur===p[k]){
            p.splice(k,1)
            k--
        }
    }
}
console.log(p)