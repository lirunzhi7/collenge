var arr = [1,1,2,2,3,3]

// [1,2,3]
// 双for循环的去重
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i] // i = 0; cur = 1
//     for (var j = i + 1; j < arr.length; j++) {
//         if (cur === arr[j]) {
//             arr.splice(j, 1)
//             j-- // 解决数组塌陷的问题
//         }
//     }
// }
// 用对象去重
var arr = [1,1,1,2,2,3,3]
// var obj = {}
// obj.name // undefined
// // 如果对象里面没有当前属性名，结果是undefined
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i] // 1 1
//     if (obj[cur] === undefined) {
//         obj[cur] = true // obj = {1:true}
//     } else {
//         arr.splice(i, 1)
//         i--
//     }
// }

var result = []
arr.forEach(function(item){
    if(!result.includes(item)){
        result.push(item)
    }
})
console.log(result)

var newArr = new Set(arr)
Array.from(newArr)
console.log(newArr)