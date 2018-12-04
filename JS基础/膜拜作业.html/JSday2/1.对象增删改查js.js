var obj = {name:'james',age:24}
obj.weight = 170
obj['height'] = 150
obj[10] = 12
// obj.40 = 12
obj['age'] = 30  
delete obj['10']
delete obj.weight
console.log(obj)
