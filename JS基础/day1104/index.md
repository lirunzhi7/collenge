### 函数
> 函数的本质是封装，将实现相同功能的代码封装起来。减少页面的冗余代码，提高代码的复用率(低耦合高内聚)
[语法] 
函数的申明: function 函数名(形参) {函数体}
函数的执行: 函数名(实参)

`形参 & 实参`
> 形参的本质是是个变量
> 实参的本质是一个值
> 形参一一对应的接收实参传过来的值
> 如果形参多了，没有对应的实参，结果就是undefined
> 如果实参多了, 会被忽略，但是可以在实参集合中拿到
function fn(a, b, c) {}
fn(10, 20) // a = 10, b = 20, c = undefined
fn('hello', 'world') // a = 'hello', b = 'world', c = undefined
fn(1,2,3,4) // a = 1, b = 2, c = 3
`实参集合 arguments`
> 每个函数都内置的属性
> 是一个类数组(和数组长得差不多，有索引有长度，但是是普通的对象不能调用数组的方法)
> 形参跟随 在非严格模式下，且没有剩余参数... 改变形参arguments也会对应改变，改变arguments形参也会对应改变
`函数执行`
> 1. 形成一个私有作用域(是一个stack)
> 2. 将原本存储在heap里面的字符串拿过来转化成真正的代码
> 3. 自上而下执行代码
`私有变量`
> 1. 在函数内部申明的变量
> 2. 形参也是私有变量
`return`
> 1. 结束函数运行 函数中return后面的代码都不再执行
> 2. 函数执行后返回return后面的值,如果没写return函数执行的结果就是undefined
var a = fn() 

### DOM获取
> 1. doument.getElememntById(id)
通过id获取一个DOM
执行的结果是一个DOM对象
DOM对象有很多内置的属性 当我们改变这些内置属性的时候浏览器会将改变的值在页面渲染
> 2. [context].getElementsByTagName(html)
context上下文 在某个范围内寻找
结果是一个类数组，就算只找到一项也是在这个类数组里面
类数组里面的每一项都是一个DOM对象
> 3. [context].getElementsByClassName(class)
和[context].getElementsByTagName(html)一样

id
className
style
onclick
innerHTML
innerText
tagName


### 选项卡