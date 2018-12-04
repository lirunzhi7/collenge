// 去重
var arr = [1,1,1,2,2,3,3,3,1]
// [1,2,3]
// 1. 对象方式去重
var obj = {}
console.log(obj[1]) // undefined
// obj[1]的结构是undefined 不删除同时 
// 给obj[1]赋值true
obj[1] = true
console.log(obj[1]) // true


var arr = [1,1,2,2,1,1,2,2,3,3,3,1]
var obj = {}
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i] // 1
    if (obj[cur] === undefined) { // 如果没有值就是undefined
        obj[cur] = true 
    } else {
        arr.splice(i, 1) // 删除重复的项
        i-- // 数组塌陷
    }
}
// console.log(arr)
// cur = 1; obj = {}; obj[1] = undefined; obj[1] = true
// cur = 1; obj = {1:true}; obj[1] = true; 删除cur这一项

// 数组塌陷
// [1,1,1,2] => [1,1,2]
// i = 1; i++; i = 2 // 漏了一项，漏了(没有比较)中间的1
// 怎么办呢
// i = 1; i--; i++; i = 1

function obj_unique(arr) {
    // clonArr  复制一份arr
    var clonArr = arr.slice()
    var obj = {}
    // 将clonArr去重
    for (var i = 0; i < clonArr.length; i++) {
        var cur = clonArr[i]
        // obj[cur] === undefined
        if (!obj[cur]) {
            obj[cur] = true
        } else {
            // clonArr.splice(i,1)
            // i--
            // 用最后一项(clonArr.length-1)覆盖重复的项(i)
            clonArr[i] = clonArr[clonArr.length-1]
            clonArr.length-- // 删除数组最后一项
            i--
        }
    }
    // 返回去重后的clonArr
    return clonArr
}
var arr = [1,1,2,2,1,1,2,2,3,3,3,1]
// var result = obj_unique(arr)
// console.log(result) // [1,2,3]


// 2. 双for循环去重
// [1,1,2,3,2,3]
// 循环拿出一项和后面的所有项比较，如果相同就删了
// 再来一次循环 [1,2,3]

// 循环[1,1,2,3,2,3] i = 0索引
// 拿出1 和 1,2,3,2,3比较 i后面的所有项
// 删除相同的[1,2,3,2,3] i = 1
// 拿出2 和 3,2,3比较 i后面的所有项
// 删除相同项 [1,2,3,3] i = 2
// 拿出3 和 3比较 i后面的所有项
// 删除相同项 [1,2,3]
function for_unique(arr) {
    var clonArr = arr.slice()
    for (var i = 0; i < clonArr.length; i++) {
        var cur = clonArr[i]
        for (var j = i + 1; j < clonArr.length; j++) {
            if (cur === clonArr[j]){
                clonArr.splice(j, 1)
                j--
            }
        }
    }
    return clonArr
}
// for_unique(arr)
console.log(for_unique(arr)) 