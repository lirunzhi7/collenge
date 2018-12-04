// var a = 0
// switch (a){
//     case 0: 
//     alert('A')
//     break;
//     case '1':
//     alert('B')
//     break;
//     case true:
//     alert('C')
//     break;
//     default:
//     alert('D')
// }
// var arr = [1,2,3,4,5,6,7,8,9]
// var total = 0
// for(var i = 0 ;i<=arr.length-1; i++){
//   total+=arr[i]
// }
// console.log(total)
// arr = [1,2,3,'11','hello',true]
// var total = 0
// for(var i = 0 ;i<=arr.length-1; i++){
//     Number(arr[i]) ? (typeof arr[i]=='boolean' ? arr[i]==null : total+= Number(arr[i])) : null
// }
// console.log(total)

var obj1 = {
    name:'xiaoming',
    age:19
}
var obj2 = obj1
obj2.age=100
obj2=[12,23]
console.log(obj1.age)