
// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }
// 申明变量 i = 0; 0 < 3判断; 成立执行循环体; i++
// i = 1; 1 < 3判断; 成立执行循环体; i++
// i = 2; 2 < 3判断; 成立执行循环体; i++
// i = 3; 3 < 3判断; 不成立结束循环

var arr = [1,2,3,4,5,6,7,8,9]
// total = 0
// 循环数组 
// 将数组每一项累加到total上面
var total = 0
for (var i = 0; i < arr.length; i++) {
    total += arr[i]
}
// console.log(total)
// 优化 这个数组不再全部都是有效数字
// 只累加有效数字 和 字符串(内容全部都是有效数字)
arr = [1,2,3,'11','11hello', true]
var total = 0
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i]
    if (typeof cur === 'number') { // 判断这个值是不是数字
        // 是不是NaN 如果不是就累加
        isNaN(cur) ? null : total += cur 
    } else if (typeof cur === 'string') {// 判断这个值是不是字符串
       // 先转成number
        var numCur = +cur
         // 是不是NaN 如果不是就累加
        isNaN(numCur) ? null : total += numCur
    }
}
// console.log(total)

var arr = ['a', 'b', 'c']
var i = 0;
// while(i < arr.length){
//     // console.log(arr[i++])
// }

var arr = ['a', 'b', 'c', 'd']
// for (var i = 0; i < arr.length; i++) {
//     var cur = arr[i]
//     if (cur === 'b') {
//         continue
//     }
//     console.log(cur)
// }
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i]
    if (cur === 'b') {
        break
    }
    console.log(cur)
}















