// recursion 递归

// var num = 0
// function fn () {
//     console.log('hello');
//     num++
//     if (num < 1000) fn();
// }
// fn()

// function fn(n) {
//     var num = n
//    for (var i = 1; i < n; i++) {
//         num += i
//    }
//    return num
// }

// function fn1(n, a) {
//     if (!a) {
//         a = 0
//     }
//     a += n
    
//     if (n === 1) {
//         console.log(a, 'hello')
//         return a
//     }
//     // 后进先出
//     console.log('>>>', a)
//     return fn1(n-1, a)
// }
// fn1(9)
// fn1(9, 9)
// // ...
// fn1(2, 42)
// fn1(1, 45) // 45


// console.log(fn1(9), '>>>');



// function fn(n) {
//     if (n === 1) return 1
//     return n + fn(n-1)
// }
// 9 + fn(8)
// 9 + 8 + fn(7)
// 9 + 8 + 7 + fn(6)
// 9 + 8 + 7 + 6 + fn(5)
// 9 + 8 + 7 + 6 +...+ fn(2)
// 9 + 8 + 7 + 6 +...+ 2 + fn(1)
// 9 + 8 + 7 + 6 +...+ 2 + 1

// console.log(fn(9));
// fn(9) // 1 + 2 + 3+...+9 => 45

// 奇数项相乘
function fn(n) {
    if (n === 1) return 1
    if (n % 2 === 0) return fn(n - 1)
    return n * fn(n - 2)
}
console.log(fn(6));// 5 * 3 * 1  15
console.log(fn(7));// 7 * 5 * 3 * fn(1) 105

// 函数执行是一个栈 
// 栈是一种数据结构 先进后出 后进先出
// function fn1(n, a) {
//     if (!a) a = 0
//     a += n
//     if (n === 1) return a
//     // 后进先出
//     return 3
// }
// fn1(2)
// fn1(1, 2) => 3