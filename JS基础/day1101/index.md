### 循环
`%` 取余数
> 模
```javascript
6%3 => 0
5%3 => 2
4%3 => 1
```

`for循环`
[语法] for (变量；以变量作为条件；变量改变) { 循环体 }
> 变量值申明一次
> 每次循环第一步是判断条件是否成立，如果成立就执行循环体，然后再改变变量
```javascript
for(var i = 1; i < arr.length; i += 2) {
    console.log(arr[i])
}
```
`continue`
> 中断本次循环体的执行，继续下一次循环
`break`
> 结束循环 包括后面的i++也不执行了
```javascript
for (var i = 0; i < 4; i++) {
    if (i === 1) {
        continue 
        // 中断本次循环 也就是说循环体下面的代码都不再执行
        // 继续执行循环
    }
    console.log(i) // 0 2 3
}
for (var i = 0; i < 4; i++) {
    if (i === 1) {
        continue 
        // 中断本次循环 也就是说循环体下面的代码都不再执行
        // 继续执行循环
    } else {
        break
        // 结束循环 
        // 循环体下面的代码也不执行
    }
    console.log(i) // 这行始终都没有执行
}
console.log(i) // 最后i++也没执行 => 0
```

`while循环`
[语法] 
while(条件) {
    ...循环体
    // 隐性或者显性的改变条件
}
// 循环体执行后会再次判断条件，如果条件还成立就继续执行循环体，直到条件为false
```javascript
arr = ['a', 'b', 'c', 'd']
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

var i = 0
while(i < arr.length) {
    console.log(arr[i])
    i++
}
var i = arr.length
while(i--) { // 4 3 2 1
        // 3 2 1 0
    console.log(arr[i])
}
// while(--i) { //  3 2 1 0
//     // i = 0 之后为false 不能再进入循环体结果就是少打印一个值
//     // 3 2 1 
//     console.log(arr[i])
// }
```

### DOM获取 (获取页面的标签)
> 1. document.getElementById(id)
document不能变
获取到的是一个DOM对象
里面有很多的内置属性 可以设置(赋值)并且设置完就生效
> id 
> className
> style  行内样式
> onclick  绑定点击事件
> innerHTML  内部内容可以识别HTML标签
> innerText  内部内容无法识别标签
> tagName 标签名(大写的)
> 2. [context].getElementsByTagName(标签)
> 3. [context].getElementsByClassName(类名)
> context 上下文的意思 也就是一个区间范围
> 拿到的是一个类数组(有索引，有长度) 类数组里面的每一项都是DOM对象

### function 函数
> 函数的本质是封装，是将实现相同功能代码封装起来。减少页面的冗余代码提高代码的复用率(低耦合高内聚)
> 函数的申明
[语法] function 函数名(形参) {函数体}
> 函数的调用  函数名加上小括号
> 函数的调用就是执行对应函数的函数体
[语法] 函数名(实参)

`JS运行机制之函数`
> 浏览器拿到JS代码形成全局作用域
> 代码自上而下运行
> 遇到申明一个函数  function fn() {}
> 1. 开辟一个堆内存(heap)将函数以字符串的形式存储起来，这个堆内存有一个16进制的地址 aaafff000
> 2. 在当前作用域下申明一个变量 fn
> 3. 将变量fn 和 这个地址(aaafff000)联系起来

`函数的执行机制`
> 1. 形成一个私有作用域(stack 栈)
> 2. 将存储在对应堆内存里面的字符串拿出来，在这个私有作用域里面执行

`函数的私有变量`
> 1. 在函数内部申明的变量
> 2. 形参

`形参 & 实参`
> 函数的申明
[语法] function 函数名(形参,形参,形参) {函数体}
> 函数的调用
[语法] 函数名(实参,实参,实参)
> 1. 形参的本质是变量
> 2. 实参的本质是值
> 3. 形参接收对应的实参
```javascript
function fn(a, b) {

}
fn(10, 'hello') // a 对应的就是10  b对应的就是'hello'
fn(20, 'world') // a 对应的就是20  b对应的就是'world'
```









