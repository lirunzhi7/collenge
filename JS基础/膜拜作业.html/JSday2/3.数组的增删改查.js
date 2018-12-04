var pp = ['a', 'b', 'c']
console.log(pp[0])
console.log(pp.length)
console.log(pp['length'])
//增加
pp[3]=1
pp[pp.length]= 'e'
// console.log(pp)
//删除
pp[3]=null
// console.log(pp)
delete pp[2]
console.log(pp)
//查询
var num1 = pp[1]
console.log(num1)
