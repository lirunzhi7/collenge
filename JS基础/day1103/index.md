### 自我介绍
王立军 
电话： 18511574563
QQ/微信： 270369591

### 浏览器内核
> 渲染内核
> webkit Safari(apple研发) 之前的Chrome也是用的webkit
> chromium/Blink 现在Chrome浏览器用的内核
> gecko(壁虎) FF火狐的内核
> Trident(三叉戟) 之前IE浏览器的内核 
> edge edge浏览器内核
> 浏览器拿到Html文件之后 => 解析标签形成一个DOMtree(DOM树) => 解析css形成一个CSSOM => 将DOMTree 和 CSSOM合并形成renderTree(渲染树)
renderTree和DOMTree的标签不是一样的，script meta等标签在DOMTree是有的在renderTree里面没有，如果给一个标签设置display：none这个标签也不会出现在renderTree里面
> JS内核 V8引擎
> WebKit技术内幕 推荐

### 变量
> var 变量名 = 值
> function 函数名() {}
`变量命名规范`
1. 0-9 a-z A-Z _ $ 只能使用这些 (强制)
2. 不能使用关键字保留字 (强制)
3. 严格区分大小写 (强制)
4. 驼峰命名 如果变量是由超过一个单词组成的，从第二个单词开始首字母大写 (规范)
5. 英文语义化 (规范)

### 输出内容
控制台输出
console.log(val,val1,val2)
在控制台详细输出 只能输出一个值
console.dir(val)
弹窗输出
alert(val) // 输出前会将val转成string

### js组成
> 1. ECMAScript 常说的js
> 2. DOM (document object model)文档对象模型
> 3. BOM (browser object model)浏览器对象模型

### 数据类型
> 基本数据类型
1. number 普通的数字 和 NaN
2. string 单引号双引号包起来的零到多个字符
3. null 空对象指针
4. undefined 未找到
5. Boolean  只有两个值true/false
> 引用数据类型
1. 对象 => 普通对象 数组 正则...
2. 函数

### 字符串
> 将其他数据类型转成字符串类型(string)
String(val)  val.toString()
> 基本数据类型转成string就是加上引号
> 普通对象 => '[object Object]'
> 数组 => 直接将数组内容加上引号
[] => ''  [1] => '1' [1,2] => '1,2'

### 数字
> 普通数字 & NaN(not a number)
> 将其他数据类型转成number类型 
> Number(val)
> 字符串转数字
1. '' => 0 
2. '2j77' => NaN
3. '12' => 12
> Boolean => number
1. true => 1
2. false => 0
> null => 0
> undefined => NaN
> 引用数据类型转成number 首先会将这个值转成字符串
> 所有的普通对象 => '[object Object]' => NaN
> [] => '' => 0
> [1] => '1' => 1
> [1,2] => '1,2' => NaN

> parseInt(val)
传入一个字符串并且以数字开头
截取到第一个非有效数字 不能是被小数
parseInt('12hello') => 12
如果传入的值不是字符串或者不是以数字开头结果都是NaN
> parseFloat(val)
和parseInt一样，只不过parseFloat可以识别浮点数(小数)

> isNaN(val)
判断val是不是NaN  val是NaN返回true 否则返回false
如果val是number类型，就直接判断
如果不是number类型，先转成number类型再判断

### 布尔值
> 布尔值只有true/false
> 将其他数据类型转成布尔值 Boolean(val)
> 只有5个值是false
> 0 '' null undefined NaN
> !val 将val转成Boolean类型再取反
> !!val 将val转成Boolean类型

> null & undefined
null 现在没有以后可能会有
undefined 现在没有以后也没有

### 普通对象
> 对象就是用大括号包起来的零到多组键值对(属性名和属性值)
var obj = {name: 'xiaobai', age: 1}
var obj = {} 这个是空对象
> 对象的添加 修改 查询
两种方式 打点方式或者中括号的方式
obj.height = 180
obj['height'] = 180
这个就是给对象obj添加属性height
obj.age = 2
obj['age'] = 2
如果有这个属性名age那就是修改，修改obj里面的age属性
console.log(obj.name)
console.log(obj['name'])
这种就是获取
> 对象属性的删除
delete obj.age 
真删除 会将这个属性age直接删除
obj.name = null
假删除 name属性还存在
`如果属性名是数字不能通过打点的方式操作`

### 数组
> 用中括号包起来的零到多组内容
> [0, 'hello', true]
> [] => 空数组
> 数组没有现性的属性名，但是有索引
> 索引是从0开始逐一递增，可以理解为属性名
> 数组有一个属性length 表示数组的长度
> 数组的增删改查
数组的增删改查和普通一样，只不过从操作属性名改成索引
又因为索引是数字，所以不能通过打点的方式操作
注意：当删除数组某一项时，其他项的索引不会改变
[1,2,3] => delete arr[0] => [empty,2,3]

### 数据类型检测
typeof val 
> 返回一个字符串类型的值
> 没法准确区分出对象里面的细分项，没法区分出数组 普通对象 正则 这些结果都是一个'object'
```javascript
typeof '' // 'string'
typeof 12 // 'number'
typeof null // 'object'
typeof {} // 'object'
typeof [] // 'object'
typeof typeof typeof 12 // 'string'
```
2. instanceof
val instanceof class => true/false
[] instanceof Array => true
3. constructor 
val.constructor === Array  => true
4. Object.prototype.toString.call(val)
Object.prototype.toString.call([]) => '[object Array]'

`Code Runner 插件可以直接运行JS 在node环境中`

### 自增自减
++i 前置自增 表达式使用的是自增后的值 先自增后运行
i++ 后置自增 表达式用的是自增前的值 先运行后自增
--i
i--
```javascript
var b = 1
b += 10 // b = b + 10
b -= 5 // b = b - 5
b *= 2 // b = b * 2
b /= 2 // b = b / 2
```

### 比较  == & ===
> 1. = 一个等号表示赋值
> 2. == 表示比较 如果两边数据类型不同会转成相同的数据类型再比较
> 3. === 如果数据类型不同会直接不等，不会讲数据类型转成相同的
NaN 和任何值都不相等 包括他自己

### js数学运算（+ -  * /）
> 1. - * / 如果两边都是number类型 就直接运算，如果有非number类型会先转成number类型
`- * / 任何值和NaN运算都是NaN`
> 2. +法运算 有两层含义
> 第一种正常的数学运算
> 第二种字符串拼接 两边只要有一方是字符串就是字符串拼接
如果是引用数据类型，会先将引用数据类型转成字符串然后进行字符串拼接
```javascript
1 - true // 0
1 - null // 1
1 + '1' // '11'
1 + [1,2] // '11,2'
1 + {} // '1[object Object]'
```

### 条件判断
1. if (条件1) {
    如果条件1 成立执行这里面的代码
} else if(条件2) {
    如果条件2 成立执行这里面的代码
} else {
    都不成立就执行这里面的代码
}
如果条件1成立 后面的判断就不再执行了。也就是说就算条件2页成立但是不会运行里面的代码

2. 三元运算符
条件 ? 代码1 ：代码2
如果条件成立执行代码1 否则执行代码2

如果在赋值操作用使用三元运算符
var a = 条件 ? 值1 ：值2
如果条件成立将值1赋值给val 否则将值2赋值给val

3. switch case
switch (值) {
    case 值1:  // 如果 值 === 值1 就执行代码1
        代码1
        break；
    case 值2: // 如果 值 === 值2 就执行代码2
        代码2
        break；
    default： // 上面的判断都不成立就执行代码3
        代码3
}
> 值 和 值1...的比较是绝对比较
> 和值1...本身是否为true没关系
> 如果不写break并且当前的判断成立，执行完当前的代码之后，直接执行下一个代码块，也就是说不再判断。直到遇到break
```javascript
var flag = false
switch (flag) {
    case 1 == '1': // true === false
        alert('A')
        break;
    case 1 === '1': // false === false
        alert('B')
        break
    default:
        alert('c')
}
```

### 简单的JS运行机制
浏览器拿到JS代码，形成一个全局作用域(global scope)
代码自上而下进行
作用域是一个stack(栈)
> var a = 1 遇到基本数据类型赋值 
1. 在当前作用域下开辟一个内存 存储1这个值
2. 在当前作用域下申明一个变量a
3. 将变量a和值1联系起来
> var obj = {name: 'xiaobai'} 遇到引用数据类型
1. 如果是一个引用数据类型，会开辟一个新的空间(是一个堆(heap)内存)
将对象里面值，以键值对的方式存储起来。这个空间有一个16进制的地址(aaafff000)
2. 在当前作用域下申明一个变量obj
3. 将变量obj和这个地址联系起来 obj = aaafff000
> function fn() {} 
函数也是引用数据类型，和对象的操作一样。只不过存储的不是键值对。是字符串

### 循环
`for`
for (var i = 0; i < 3; i++) {
    console.log(i)
}
// 申明变量 i = 0; 0 < 3判断; 成立执行循环体; i++
// i = 1; 1 < 3判断; 成立执行循环体; i++
// i = 2; 2 < 3判断; 成立执行循环体; i++
// i = 3; 3 < 3判断; 不成立结束循环

`continue & break`
continue 结束本次循环，继续下次循环
break 结束循环 包括 i++ 都不执行


`while`
while(条件) {
    循环体
    // 隐性的规则 循环体里面必须改变条件
}
















