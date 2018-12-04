// bubble_sort 冒泡排序
var arr = [1, 9, 10, 20, 7, 2, 8]
// [1, 2, 8, 9]
// -------------------------
// [1, 9, 2, 8] i = 0
// 1 和 9比较 如果前面一项大于后面一项就调换位置，否则不动
// [1, 9, 2, 8] i = 1
// 9 和 2比较; 9 > 2; [1, 2, 9, 8]
// [1, 2, 9, 8] i = 2
// 9 和 8比较 9 > 8; [1, 2, 8, 9]
// 首先上面一串操作取到最大值放在最后面
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            // var temp = arr[j]
            // arr[j] = arr[j + 1]
            // arr[j + 1] = temp
        }
    }
}
console.log(arr)


var maxArr = [1, 9, 10, 8]
// 前面一个比后面一个大就交换位置
// i = 0; 拿到 1 和 9 比较; 1 > 9 false; [1, 9, 10, 8]
// i = 1; 拿到 9 和 10 比较; 9 >10 fasle; [1, 9, 10, 8]
// i = 2; 拿到 10 和 8比较; 10 > 8 true; [1, 9, 8, 10] 
// i = 3; 拿到 10 和 后面一项(没有) 不用比较
// var maxArr = [1, 9, 10, 8]
// for (var i = 0; i < maxArr.length; i++) {
//     var cur = maxArr[i]
//     if (cur > maxArr[i + 1]) {
//         var temp = maxArr[i]
//         maxArr[i] = maxArr[i + 1]
//         maxArr[i + 1] = temp
//     }
// }
// console.log(maxArr)
