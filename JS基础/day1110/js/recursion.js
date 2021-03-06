// 递归
// 递归的本质是栈的调用
// 栈是先进后出，后进先出

function fn(n){
    if (n === 1) return 1
    if (n % 2 === 0) return fn(n - 1)
    return n + fn(n - 2)
}
// 奇数项相加
// 9 + fn(7)
// 9 + 7 + fn(5)
// 9 + 7 + 5 + 3 + 1
fn(9) // 9 + 7 + 5 + 3 +1
// fn(10-1)
// fn(9)
fn(10) // 9 + 7 + 5 + 3 +1