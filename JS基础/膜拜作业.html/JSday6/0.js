var p = [1,10,8,7,5,20,19]
for (var i = 0; i < p.length; i++) {
    var pop = p[i]
    for (var k = i+1; k < p.length; k++) {
        if(pop>p[k]){
            var sen = p[k]
            p[k]=p[i]
            p[i]=sen
        }
    }
}
console.log(p)//冒泡方法


// 求10以下的奇数项乘的和
var p = 10
result=fn(p)
function fn(n){
    if(n===1) return 1
    if(n%2===0) return fn(n-1)
    return n*fn(n-2)
}
console.log(result)

