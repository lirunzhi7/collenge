var myName = 'hello'
var myname = 'world'
console.log(myName, myname)


var obj1 = {
    name: 'xiaobai',
    age: 1
}
var obj2 = obj1
obj2.age = 2
obj1.age = 3
// console.log(obj2.age) // 3 


var obj1 = {
    name: 'xiaobai',
    age: 1
}
var obj2 = obj1
obj2.age = 2
obj2 = {age: 3}
obj2.age = 4
console.log(obj1.age, obj2.name) 
// 2 undefined
