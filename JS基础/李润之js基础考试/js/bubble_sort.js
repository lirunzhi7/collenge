var p =[1,2,3,5,10,20,1,7,5]
for (var k = 0; k < p.length; k++) {
    for (var i = 0; i < p.length-1-k; i++) {
        var cur = p[i]
        if(cur>p[i+1]){
            [p[i],p[i+1]]=[p[i+1],p[i]]
        }
    }
}
console.log(p)