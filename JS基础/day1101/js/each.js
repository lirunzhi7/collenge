// for循环
var arr = ['a', 'b', 'c', 'd']

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// 第一步 var i = 0; 0 < 4; 执行循环体console.log(1); i++
// 第二步 i = 1; 1 < 4; 执行循环体console.log(1); i++
// 第三部 i = 2；2 < 4; 执行循环体console.log(1); i++
// 第三部 i = 3；3 < 4; 执行循环体console.log(1); i++
// 第三部 i = 4；4 < 4; 循环终止


// 将一个数组索引为奇数的内容打印出来
var arr = ['a', 'b', 'c', 'd']

// for(var i = 1; i < arr.length; i += 2) {
//     console.log(arr[i])
// }

// for(var i = 0; i < arr.length; i++){
//     i++
//     console.log(arr[i])
// }

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[++i])
//     // console.log(arr[i++]) 这样是不能达到效果的
// }

// for(var i = 0; i < arr.length; i++){
//     // 0 1 2 3
//     if (i%2 === 1) {
//         console.log(arr[i])
//     }
// }

// var flag = true
// for (var i = 0; i < arr.length; i++) {
//     flag = !flag
//     // false true false true
//     if(flag){
//         console.log(arr[i])
//     }
// }

// var a = 0
// for (var i = 0; i < 10; i++) {
//     if (i < 4) {
//         i++
//         a += 2
//     } else if(i < 7) {
//         i += 2
//         a++
//     } else {
//         a += i
//     }
//     a++
// } // i 1 2 3 6 7 8 9 10
//   // a 2 3 5 16 7 8 15 6 24 25 34 35
// console.log(a, i)

// for (var i = 0; i < 4; i++) {
//     if (i === 1) {
//         continue 
//         // 中断本次循环 也就是说循环体下面的代码都不再执行
//         // 继续执行循环
//     } else {
//         break
//         // 结束循环 
//         // 循环体下面的代码也不执行
//     }
//     console.log(i)
// }
// console.log(i)


// while 循环

// var flag = 10
// while(flag) {
//     console.log(flag)
//     flag = flag - 1
// }


arr = ['a', 'b', 'c', 'd']
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// var i = 0
// while(i < arr.length) {
//     console.log(arr[i])
//     i++
// }
var i = arr.length
while(i--) { // 4 3 2 1
        // 3 2 1 0
    console.log(arr[i])
}
while(--i) { //  3 2 1 0
    // i = 0 之后为false 不能再进入循环体结果就是少打印一个值
    // 3 2 1 
    console.log(arr[i])
}







